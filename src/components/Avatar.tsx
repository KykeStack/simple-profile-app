import {type Component, createSignal } from "solid-js";
import { A } from "@solidjs/router"; 

const Avatar: Component<{
        imageUrl: string,
        userName: string,
        userEmail: string
    }> = (props) => {

    const [dropdownVisible, setDropdownVisible] = createSignal(true);

    const togleDropdown = () => setDropdownVisible(() => !dropdownVisible());

    return(
    <section class="relative">
        <img 
            onClick={togleDropdown}
            class="w-10 h-10 rounded-full cursor-pointer self-end" 
            src={props.imageUrl} alt="User dropdown" 
        />
        <div 
            class="z-50 -right-2  mt-2 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            classList={{ hidden: dropdownVisible() === true}}>
            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{props.userName}</div>
            <div class="font-medium truncate">{props.userEmail}</div>
            </div>
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                <li>
                    <A href="/profile" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</A>
                </li>
            </ul>
            <div class="py-1">
                <A href="/signout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</A>
            </div>
        </div>
    </section>
    );
};

export default Avatar;