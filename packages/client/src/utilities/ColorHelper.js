import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

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

export default ThemeColor;
