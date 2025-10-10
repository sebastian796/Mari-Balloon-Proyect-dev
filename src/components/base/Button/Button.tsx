import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  styleClass?:string;
}

const Button: React.FC<ButtonProps> = ({ label,styleClass, ...rest }) => {
  return (
    <button className={`${styles.button} ` + styleClass } {...rest}>
      {label}
    </button>
  );
};

export default Button;
