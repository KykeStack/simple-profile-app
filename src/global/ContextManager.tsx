import { Accessor, Setter, createContext, useContext, createSignal } from "solid-js";
import supabaseClient from "./SupabaseClient";
import { AuthError, Session, User } from "@supabase/supabase-js";

export type FunctionReturn = {
  status: boolean;
  content: unknown
}


type SignInResponseFalse = { status: false; content: string };
type SignInResponseTrue = { status: true; content: { user: User | null; session: Session | null } };

interface ContextProps {
    userLogInStatus: Accessor<boolean>;
    setUserLogInStatus: Setter<boolean>;
    signOut: () => Promise<void>;
    retrieveCurrentSession: () => Promise<void>
    getCurrentUser: () => Promise<void>;
    currentUser: Accessor<User>;
    setCurrentUser: Setter<User>;
    count: Accessor<number>;
    setCount: Setter<number>;
    signInWithEmail(email: string, password: string
      ): Promise<SignInResponseTrue | SignInResponseFalse>;
      
    signUpUser(
      email: string, password: string, username: string 
      ): Promise<{ user: User; session: Session; } | { 
          user: null; session: null; }>
}

const GlobalContext = createContext<ContextProps>();

export function GlobalContextProvider(props) {
    const [userLogInStatus, setUserLogInStatus] = createSignal<boolean>(false);
    const [currentUser, setCurrentUser] = createSignal<User>();
    const [count, setCount] = createSignal(0);

    async function getCurrentUser() {
      const { data: { user } } = await supabaseClient().auth.getUser()
      console.log("🚀 ~ file: ContextManager.tsx:42 ~ getCurrentUser ~ user:", user)
      if (user !== null) {
        setCurrentUser(() => user);
        setUserLogInStatus(true);
      } else {
        setUserLogInStatus(false);
      }
    }
    
    async function signOut() {
      const { error } = await supabaseClient().auth.signOut()
      if (error) {
        console.log('Error signing out:', error.message)
      } else {
        setUserLogInStatus(false);
      }
    }

    async function signInWithEmail(email: string, password: string) {
      const { data, error } = await supabaseClient().auth.signInWithPassword({
        email: email,
        password: password,
      })
      if (error) {
        return{ status: false, content: error.message } as SignInResponseFalse;
      } else {
        return { status: true, content: data } as SignInResponseTrue;
      }
    }

    async function signUpUser(email: string, password: string, username: string) {
      const { data, error } = await supabaseClient().auth.signUp(
        {
          email: email,
          password: password,
          options: {
            data: {
              username: username
            }
          }
        }
      )
      if (error) {
        console.log(error);
        return;
      }
      console.log("🚀 ~ file: ContextManager.tsx:82 ~ signUpUser ~ data:", data)
      return data;
    }
    
    const retrieveCurrentSession = async () => {
      supabaseClient().auth.onAuthStateChange((_event, session) => {
        if (session?.user) {
          console.log(session.user);
          setCurrentUser(session.user);
          setUserLogInStatus(true);
        } else {
          setUserLogInStatus(false);
        }});
    }

    return (
      <GlobalContext.Provider value={{ 
        userLogInStatus, 
        setUserLogInStatus,
        retrieveCurrentSession, 
        signOut, 
        getCurrentUser,
        currentUser,
        setCurrentUser,
        count,
        setCount,
        signInWithEmail,
        signUpUser,
      }}>
        {props.children}
      </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext)!;