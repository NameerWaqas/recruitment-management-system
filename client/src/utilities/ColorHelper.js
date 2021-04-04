import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

// let globalTheme = "light";
/**
 * @param props React Props
 * @param {children} props.children
 */
function ThemeColor({ children }) {
  const Context = createContext("light");
  const [theme, setTheme] = useState("light");

  return (
    <Context.Provider value={[theme, setTheme]}>{children}</Context.Provider>
  );
}
ThemeColor.propTypes = {
  children: PropTypes.shape().isRequired,
};

// Utility function that returns background and foreground color based on the current theme.
export function colorHelper(type, element) {
  console.log("type,element :>> ", type, element);
}

export default ThemeColor;
