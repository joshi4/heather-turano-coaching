import React from "react";
import PropTypes from "prop-types";

import Color from "../Color";
import "./index.module.scss";

const Text = ({ size, color, copy, children }) => (
  <p styleName={`txt ${size}`}>
    <Color color={color}>{copy || children}</Color>
  </p>
);

Text.propTypes = {
  /**
   * Size of the Text text
   */
  size: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]).isRequired,
  color: PropTypes.string,
  /**
   * The copy of the Text font
   */
  copy: PropTypes.string,
  /**
   * The copy of the Text font
   */
  children: PropTypes.any
};

Text.defaultProps = {
  color: null,
  copy: null,
  children: null
};

export default Text;
