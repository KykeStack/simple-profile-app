import { Component } from "solid-js";
import { useGlobalContext } from "../global/ContextManager";
import { HOME_PAGE } from "../global/values";

const SignOut: Component<{}> = (props) => {
  const { signOut } = useGlobalContext();

  const manageSignOut = async () => {
    console.log("Signing out...");
    await signOut();
    console.log("Redirecting...");
    window.location.replace(HOME_PAGE);
  }

  return(
    <section class="bg-gray-200 dark:bg-gray-900 w-screen h-screen flex items-center justify-center">
        <div class="w-[20rem;] h-[30rem;] lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Confirm </h2>
            <img class=" rounded-lg" src="https://shorturl.at/eDJX6" alt="Goodbye Image" />
            <div class=" w-full flex items-center justify-center">
                <button 
                    onClick={manageSignOut}
                    type="button" 
                    class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >Sign Out</button>
            </div>
        </div>
    </section>
    );
};

export default SignOut;