import React from "react";
import PropTypes from "prop-types";

import Color from "../Color";
import "./index.module.scss";

const Paragraph = ({ size, color, copy, children }) => (
  <p styleName={`paragraph ${size}`}>
    <Color color={color}>{copy || children}</Color>
  </p>
);

Paragraph.propTypes = {
  /**
   * Size of the paragraph text
   */
  size: PropTypes.oneOf(["xl", "lg", "md", "sm", "xs"]).isRequired,
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

Paragraph.defaultProps = {
  color: null,
  copy: null,
  children: null
};

export default Paragraph;
