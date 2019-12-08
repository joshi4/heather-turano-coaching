import React from "react";
import PropTypes from "prop-types";

import Color from "../Color";
import "./index.module.scss";

const Caption = ({ size, color, copy, children }) => (
  <p styleName={`caption ${size}`}>
    <Color color={color}>{copy || children}</Color>
  </p>
);

Caption.propTypes = {
  /**
   * Size of the paragraph text
   */
  size: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]).isRequired,
  /**
   * Color of the typ
   */
  color: PropTypes.string,
  /**
   * The copy of the paragraph font
   */
  copy: PropTypes.string,
  /**
   * The copy of the paragraph font
   */
  children: PropTypes.string
};

Caption.defaultProps = {
  copy: null,
  children: null,
  color: null
};

export default Caption;
