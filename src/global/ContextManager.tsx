import { Accessor, Setter, createContext, useContext, createSignal } from "solid-js";
import supabaseClient from "./SupabaseClient";

interface ContextProps {
    userLogInStatus: Accessor<boolean>;
    setUserLogInStatus: Setter<boolean>;
    signOut: () => Promise<void>;
}

const GlobalContext = createContext<ContextProps>();

export function GlobalContextProvider(props) {
    const [userLogInStatus, setUserLogInStatus] = createSignal<boolean>(false);
    
    async function signOut() {
      const { error } = await  supabaseClient().auth.signOut()
    
      if (error) {
        console.log('Error signing out:', error.message)
      } else {
        setUserLogInStatus(false);
      }
    }
    
    return (
      <GlobalContext.Provider value={{ userLogInStatus, setUserLogInStatus, signOut }}>
        {props.children}
      </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => useContext(GlobalContext)!;