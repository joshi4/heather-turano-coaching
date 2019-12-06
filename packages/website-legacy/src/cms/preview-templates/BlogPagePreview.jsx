import React from "react";
import PropTypes from "prop-types";
import { BlogPageTemplate } from "../../templates/blog/blog.template";

const BlogPostPreview = ({ entry }) => (
  <BlogPageTemplate
    title={entry.getIn(["data", "title"])}
    body={entry.getIn(["data", "body"])}
    form={{
      firstNamePlaceholder: entry.getIn([
        "data",
        "form",
        "firstNamePlaceholder"
      ]),
      emailAddressPlaceholder: entry.getIn([
        "data",
        "form",
        "emailAddressPlaceholder"
      ]),
      submitLabel: entry.getIn(["data", "form", "submitLabel"])
    }}
    prompt={entry.getIn(["data", "prompt"])}
  />
);

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired
};

export default BlogPostPreview;
