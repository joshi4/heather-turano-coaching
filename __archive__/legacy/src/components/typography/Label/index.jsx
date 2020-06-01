import React from "react";
import PropTypes from "prop-types";

import Color from "../Color";

import "./index.module.scss";

const Label = ({ size, color, copy, children, type }) => {
  const text = <Color color={color}>{copy || children}</Color>;
  if (type !== "input") {
    return <p styleName={`label ${size}`}>{text}</p>;
  }
  return <span styleName={`label ${size}`}>{text}</span>;
};

Label.propTypes = {
  /**
   * Size of the paragraph text
   */
  size: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]).isRequired,
  /**
   * The copy of the paragraph font
   */
  copy: PropTypes.string,
  /**
   * The copy of the paragraph font
   */
  children: PropTypes.string,
  /**
   * The type of the input determines what type of HTML
   * node is rendered
   */
  type: PropTypes.oneOf(["default", "input"]),
  color: PropTypes.string
};

Label.defaultProps = {
  copy: null,
  children: null,
  type: "default",
  color: "grayscale-0"
};

export default Label;
