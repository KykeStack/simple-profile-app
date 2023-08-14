export const HOME_PAGE = "/"

export const NavbarButton = {
    home : {text: "Home", current: true, route : "/"},
    about: {text: "About", current: false, route : "/about"},
    services: {text: "Services", current: false, route : "/services"},
    contact: {text: "Contact", current: false, route : "/contact"},
}

export const currentRouteClass = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
export const optionRouteClass = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
