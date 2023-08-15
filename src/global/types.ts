import { type Component } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

export type CallParentFuntion = () => void;

export interface buttonProps {
    buttonTetxt: string;
    onCallParentFunction?: CallParentFuntion
  }

export interface SocialAuthProps {
    svg: Component | string, 
    buttonText: string
    additionaTex?: string, 
    onCallParentFunction?: CallParentFuntion
}

  
export type ParentProps<P = {}> = P & { children?: JSX.Element };