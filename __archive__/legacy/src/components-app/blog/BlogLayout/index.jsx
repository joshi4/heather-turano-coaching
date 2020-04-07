import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const BlogLayout = ({ children }) => (
  <section styleName="blog-layout">{children}</section>
);

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default BlogLayout;
