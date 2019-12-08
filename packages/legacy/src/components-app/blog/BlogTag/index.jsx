import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Link as GatsbyLink } from "gatsby";

import "./index.module.scss";
import { Caption } from "../../../components/typography";

const BlogTag = ({ tag }) => (
  <GatsbyLink styleName="blog-tag" to={`/tags/${kebabCase(tag)}/`}>
    <Caption size="sm" color="lightscale-3">
      {tag}
    </Caption>
  </GatsbyLink>
);

BlogTag.propTypes = {
  tag: PropTypes.string.isRequired
};

export default BlogTag;
