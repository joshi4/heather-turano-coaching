import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";
import { BlogPostPageTemplate } from "../../templates/blog-post/blog-post.template";

const BlogPostPagePreview = ({ entry, widgetFor }) => {
  const body = widgetFor("body");
  const date = format(entry.getIn(["data", "date"]), "MMMM DD, YYYY");

  return (
    <BlogPostPageTemplate
      title={entry.getIn(["data", "title"])}
      dateCreated={date}
      content={body}
      // tags={entry.getIn(["data", "tags"])}
    />
  );
};

BlogPostPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired,
  widgetFor: PropTypes.func.isRequired
};

export default BlogPostPagePreview;
