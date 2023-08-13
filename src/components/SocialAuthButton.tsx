import { type Component, Show } from "solid-js";
import { CallParentFuntion } from "../global/types";

const SocialAuthButton: Component<{
        svg: Component, 
        buttonText: string
        additionaTex?: string, 
        onCallParentFunction?: CallParentFuntion
    }> = (props) => {
      const handleChildClick = () => {
        props.onCallParentFunction();
      };
  return (
    <>
      <a 
        href="#" 
        class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        onClick={props.onCallParentFunction ? handleChildClick : null}
        >
          {<props.svg/>}
          <span class="flex-1 ml-3 whitespace-nowrap">{props.buttonText}</span>
          <Show when={props.additionaTex} >
              <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">{props.additionaTex}</span>
          </Show>
      </a>
    </>


  );
};

export default SocialAuthButton;