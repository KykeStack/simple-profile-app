import { onMount, type Component } from 'solid-js';
import supabaseClient from './global/SupabaseClient';
import { useGlobalContext } from './global/ContextManager';
import MainPage from './main-page/MainPage';

const App: Component = () => {
  const { setUserLogInStatus, getCurrentUser} = useGlobalContext();

  onMount(() => {
    getCurrentUser();
    supabaseClient().auth.onAuthStateChange((_event, session) => {
    if (session?.user) {
        setUserLogInStatus(true);
    } else {
        setUserLogInStatus(false);
    }});
  });

  return (
    <MainPage/>
  );
};

export default App;
