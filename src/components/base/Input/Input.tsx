import * as React from "react";
import styles from './Input.module.scss';

export interface IInputProps extends React.IframeHTMLAttributes<HTMLAnchorElement>{
    styleClass?:string;
}

const Input: React.FC<IInputProps> = (styleClass,...rest) => {
  return(
    <input className={`${styles.input}`+styleClass} {...rest} />
  );
};

export default Input;
