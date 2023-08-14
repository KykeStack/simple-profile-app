import { type Component, createSignal, Show } from "solid-js";
import SignLogsGoogle from "../components/SignLogsGoogle";
import { useGlobalContext } from "../global/ContextManager";
import { deconstructForm } from "../global/functions";
import { HOME_PAGE } from "../global/values";


interface UserForm {
    email: string;
    password: string;
    remember: boolean;
  }

const SignInForm: Component<{}> = (props) => {
    const [errorLogIn, setErrorLogIn] = createSignal<boolean>(false);
    const { signInWithEmail } = useGlobalContext();

    const getFormContent = async (event: SubmitEvent) => {
        event.preventDefault();
        setErrorLogIn(false);
        const form = event.target as HTMLFormElement;
        if (form) {
            const validForm = deconstructForm(form) as UserForm;
            const data  = await signInWithEmail(validForm.email, validForm.password);
            if (data === null) {
                setErrorLogIn(true);
                return
            }
            window.location.replace(HOME_PAGE)
        }
    };

    return(
        <section class="bg-gray-200 dark:bg-gray-900  flex items-center justify-center w-screen h-screen">
            <div class="mx-auto lg:px-8 max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-2 lg:gap-8 place-items-center">
                <div class="relative file:w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <Show when={errorLogIn()}> 
                        <div class="absolute -top-20 left-1 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span class="font-medium">Something Whent Wrong!</span> Invalid login credentials.
                        </div>
                    </Show>
                    <ul class="my-4 space-y-3">
                        <li>
                            <SignLogsGoogle/>
                        </li>
                    </ul>
                    <form class="space-y-6 " action="#" onSubmit={getFormContent}>
                        <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                        </div>
                        <div class="flex items-start">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                                </div>
                                <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                        </div>
                        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                        </div>
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

export default SignInForm;