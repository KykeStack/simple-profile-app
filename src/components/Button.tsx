import { Component } from "solid-js";

export interface buttonProps {
  buttonTetxt: string;
  onCallParentFunction: () => void;
}

const Button: Component<buttonProps> = (props) => {
  const handleChildClick = () => {
    props.onCallParentFunction();
  };

  return (
    <button 
        onClick={handleChildClick}
        type="button" 
        class="
            text-white 
            bg-blue-700 
            hover:bg-blue-800 
            focus:ring-4 
            focus:ring-blue-300 
            font-medium 
            rounded-lg 
            text-sm 
            px-5 
            py-2.5 
            mr-2 
            mb-2 
            dark:bg-blue-600 
            dark:hover:bg-blue-700 
            focus:outline-none 
            dark:focus:ring-blue-800"
            >
                {props.buttonTetxt}
            </button>
  );
};

export default Button;