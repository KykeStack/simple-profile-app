import { onMount, type Component } from 'solid-js';
import { useGlobalContext } from './global/ContextManager';
import MainPage from './main-page/MainPage';

const App: Component = () => {
  const { getCurrentUser } = useGlobalContext();
  
  onMount(() => getCurrentUser());

  return (
    <MainPage/>
  );
};

export default App;
