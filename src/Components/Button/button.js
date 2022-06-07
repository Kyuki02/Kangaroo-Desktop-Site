import React from "react";
import styles from "./button.module.css";

export const Button = ({ disabled }) => {
  const classNames = [
    styles.button,
    disabled ? styles.button_disabled : "",
  ].join(" ");
  return (
    <button className={classNames}>
      <span className="label">Click me!</span>
    </button>
  );
};
