import { JSX } from "solid-js/jsx-runtime";

export type CallParentFuntion = () => void;

export interface buttonProps {
    buttonTetxt: string;
    onCallParentFunction?: CallParentFuntion
  }
  
export type ParentProps<P = {}> = P & { children?: JSX.Element };