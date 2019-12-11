import React from "react";
import PropTypes from "prop-types";

import { Content } from "../../components-gatsby";
import {
  BlogContainer,
  BlogHeader,
  BlogTagGroup,
  BlogNavigation,
  BlogLayout
} from "../../components-app/blog";

export const BlogPostPageTemplate = ({
  title,
  dateCreated,
  content,
  contentComponent,
  tags,
  pagePrev,
  pageNext
}) => {
  const BlogContent = contentComponent || Content;

  return (
    <BlogLayout>
      <div className="content">
        <BlogContainer>
          <BlogHeader
            title={title}
            backLinkRoute="/blog"
            backLinkText="Back to the list"
            dateCreated={dateCreated}
            author="Heather Turano"
          />
          <BlogContent content={content} />
          {tags && <BlogTagGroup tags={tags} />}
          <BlogNavigation tags={tags} pagePrev={pagePrev} pageNext={pageNext} />
        </BlogContainer>
      </div>
    </BlogLayout>
  );
};

BlogPostPageTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.any,
  title: PropTypes.string.isRequired,
  dateCreated: PropTypes.string.isRequired,
  pagePrev: PropTypes.string.isRequired,
  pageNext: PropTypes.string.isRequired,
  tags: PropTypes.array
};

BlogPostPageTemplate.defaultProps = {
  tags: [],
  contentComponent: null
};
