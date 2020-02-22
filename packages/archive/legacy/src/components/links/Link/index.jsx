import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

import "./index.module.scss";

export const Link = ({ children, ...restProps }) => (
  <div styleName="link">
    <GatsbyLink {...restProps}>{children}</GatsbyLink>
  </div>
);

Link.propTypes = {
  children: PropTypes.any.isRequired
};

export default Link;
