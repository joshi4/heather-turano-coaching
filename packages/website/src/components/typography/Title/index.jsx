import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const Title = ({ size, copy, children }) => {
  switch (size) {
    case "md":
      return <h5 styleName="md">{copy || children}</h5>;
    case "sm":
      return <h6 styleName="sm">{copy || children}</h6>;
    case "lg":
    default:
      return <h3 styleName="lg">{copy || children}</h3>;
  }
};

Title.propTypes = {
  copy: PropTypes.string,
  size: PropTypes.oneOf(["lg", "md", "sm"]),
  children: PropTypes.string
};

Title.defaultProps = {
  copy: null,
  children: null,
  size: "lg"
};

export default Title;
