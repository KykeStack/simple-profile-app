import { Accessor, Setter, createContext, useContext, createSignal } from "solid-js";
import supabaseClient from "./SupabaseClient";
import { Session, User } from "@supabase/supabase-js";

interface ContextProps {
    userLogInStatus: Accessor<boolean>;
    setUserLogInStatus: Setter<boolean>;
    signOut: () => Promise<void>;
    getCurrentUser: () => Promise<User | null>;
    currentUser: Accessor<User>;
    setCurrentUser: Setter<User>;
    count: Accessor<number>;
    setCount: Setter<number>;
    signInWithEmail(email: string, password: string): Promise<{
      user: User;
      session: Session;
    }>
    signUpUser(email: string, password: string, username: string): Promise<{
        user: User;
        session: Session;
      } | {
          user: null;
          session: null;
      }>
}

const GlobalContext = createContext<ContextProps>();

export function GlobalContextProvider(props) {
    const [userLogInStatus, setUserLogInStatus] = createSignal<boolean>(false);
    const [currentUser, setCurrentUser] = createSignal<User>();
    const [count, setCount] = createSignal(0);
    
    async function signOut() {
      const { error } = await supabaseClient().auth.signOut()
    
      if (error) {
        console.log('Error signing out:', error.message)
      } else {
        setUserLogInStatus(false);
      }
    }
    
    async function getCurrentUser() {
      const { data: { user } } = await supabaseClient().auth.getUser()
      if (user !== null) {
        setCurrentUser(() => user);
      }
      return null;
    }

    async function signInWithEmail(email: string, password: string) {
      const { data, error } = await supabaseClient().auth.signInWithPassword({
        email: email,
        password: password,
      })
      if (error) {
        console.log('Error signing out:', error.message)
        return null;
      } else {
        return data;
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
      return data;
    }
    
    return (
      <GlobalContext.Provider value={{ 
        userLogInStatus, 
        setUserLogInStatus, 
        signOut, 
        getCurrentUser,
        currentUser,
        setCurrentUser,
        count,
        setCount,
        signInWithEmail,
        signUpUser
      }}>
        {props.children}
      </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext)!;