import React from "react";
import PropTypes from "prop-types";

import BlogTag from "../BlogTag";
import "./index.module.scss";

const BlogTagGroup = ({ tags }) =>
  tags && tags.length ? (
    <ul styleName="tag-group">
      {tags.map(tag => (
        <li key={tag}>
          <BlogTag tag={tag} />
        </li>
      ))}
    </ul>
  ) : null;

BlogTagGroup.propTypes = {
  tags: PropTypes.array.isRequired
};

export default BlogTagGroup;
