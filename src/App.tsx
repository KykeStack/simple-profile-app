import { onMount, type Component } from 'solid-js';
import supabaseClient from './global/SupabaseClient';
import { useGlobalContext } from './global/ContextManager';
import MainPage from './main-page/MainPage';

const App: Component = () => {
  const { setUserLogInStatus, getCurrentUser , setFetchUser, fetchUser} = useGlobalContext();
  
  onMount(() => {
    if (fetchUser() === false) {
      getCurrentUser();
      supabaseClient().auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
          setUserLogInStatus(true);
      } else {
          setUserLogInStatus(false);
      }});
      console.log(fetchUser());
      setFetchUser(true);
      console.log(fetchUser());
    }
  });
  return (
    <MainPage/>
  );
};

export default App;
