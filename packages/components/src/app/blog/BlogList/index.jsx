import React from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

const BlogList = ({ children }) => <ul styleName="blog-list">{children}</ul>;

BlogList.propTypes = {
  children: PropTypes.any.isRequired
};

export default BlogList;
