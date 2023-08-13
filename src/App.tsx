import { onMount, type Component } from 'solid-js';
import supabaseClient from './global/SupabaseClient';
import { useGlobalContext } from './global/ContextManager';
import MainPage from './main-page/MainPage';

const App: Component = () => {
  const { setUserLogInStatus } = useGlobalContext();

  onMount(() => {
      supabaseClient().auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUserLogInStatus(true);
      } else {
        setUserLogInStatus(false);
      }
      console.log(session?.user);
    })

    });

  return (
    <MainPage/>
  );
};

export default App;
