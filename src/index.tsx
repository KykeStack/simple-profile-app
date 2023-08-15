/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';

import App from './App';
import { GlobalContextProvider } from './global/ContextManager';
import { Router, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js"

const SignOut = lazy(() => import('./components/SignOut'));
const SignInForm = lazy(() => import('./signin-form/SignInForm'));
const SignUpForm = lazy(() => import('./signup-form/SignUpForm'));
const Profile = lazy(() => import('./profile/Profile'));

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() =>(
  <Router> 
      <GlobalContextProvider>
        <Routes>
          <Route path="/" component={App} /> 
          <Route path="/signin" component={SignInForm} /> 
          <Route path="/signup" component={SignUpForm} /> 
          <Route path="/signout" component={SignOut} /> 
          <Route path="/profile" component={Profile} /> 
        </Routes>
      </GlobalContextProvider>
  </Router>
), root!);
