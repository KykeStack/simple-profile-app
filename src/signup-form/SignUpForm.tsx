import { createSignal, type Component, Show } from "solid-js";
import { useGlobalContext } from "../global/ContextManager";
import SignLogsGoogle from "../components/SignLogsGoogle";
import { deconstructForm } from "../global/functions";
import { HOME_PAGE } from "../global/values";

interface signInForm {
    username: string;
    email: string;
    password: string;
    remember: boolean;
  }

const SignUpForm: Component<{}> = (props) => {
    
    const { signUpUser } = useGlobalContext();
    const [awaitLogin, setAwaitLogin] = createSignal<boolean>(false);

    const getFormContent = async (event: SubmitEvent) => {
        event.preventDefault();
        setAwaitLogin(true);
        const form = event.target as HTMLFormElement;
        if (form) {
            const validForm = deconstructForm(form) as signInForm;
            const data  = await signUpUser(validForm.email, validForm.password, validForm.username);
            setAwaitLogin(false);
            if (data !== null && data.user.aud === 'authenticated') {
                // window.location.replace(HOME_PAGE);
            }
        }
    };

    return(
        <section class="bg-gray-200 dark:bg-gray-900  flex items-center justify-center w-screen h-screen">
            
            <div class="mx-auto lg:px-8 max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-2 lg:gap-8 place-items-center">
                <div class=" w-fit max-w-md min-w-max p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Register to our platform</h5>
                    <ul class="my-4 space-y-3">
                        <li>
                            <SignLogsGoogle/>
                        </li>
                    </ul>
                    <form class="space-y-6 " action="#" onSubmit={getFormContent}>
                        <div>
                            <label for="username"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                            <input type="text" name="username" pattern="[A-Za-z0-9]+" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="My Name" required/>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Show when={awaitLogin()} fallback="Sign Up">
                            <div class="flex items-center justify-center">
                                <div role="status">
                                    <svg aria-hidden="true" class="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                                    <span class="sr-only">Loading...</span>
                                </div>
                            </div>
                        </Show>
                        </button>
                    </form>
                </div>
                <img 
                    class="hidden lg:flex h-full w-full transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0 d" 
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png" 
                    alt="image description"
                ></img>
            </div>
        </section>
    );
};

export default SignUpForm;