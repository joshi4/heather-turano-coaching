import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const BlogContainer = ({ children }) => (
  <section styleName="blog">{children}</section>
);

BlogContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlogContainer;
