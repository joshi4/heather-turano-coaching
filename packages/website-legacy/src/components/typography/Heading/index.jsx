import React from "react";
import PropTypes from "prop-types";

import Color from "../Color";
import "./index.module.scss";

const Heading = ({ size, color, copy, children }) => {
  switch (size) {
    case "xl":
      return (
        <h1 styleName={size}>
          <Color color={color}>{copy || children}</Color>
        </h1>
      );
    case "lg":
      return (
        <h2 styleName={size}>
          <Color color={color}>{copy || children}</Color>
        </h2>
      );
    case "md":
      return (
        <h3 styleName={size}>
          <Color color={color}>{copy || children}</Color>
        </h3>
      );
    case "sm":
      return (
        <h4 styleName={size}>
          <Color color={color}>{copy || children}</Color>
        </h4>
      );
    default:
      return (
        <h1>
          <Color color={color}>{copy || children}</Color>
        </h1>
      );
  }
};

Heading.propTypes = {
  copy: PropTypes.string,
  children: PropTypes.string,
  size: PropTypes.oneOf(["xl", "lg", "md", "sm"]),
  color: PropTypes.string
};

Heading.defaultProps = {
  size: "xl",
  color: "default",
  copy: null,
  children: null
};

export default Heading;
