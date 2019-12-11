import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import { Layout, HTMLContent } from "../../components-gatsby";
import { BlogPostPageTemplate } from "./blog-post.template";

export const query = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        key
        protected
        category
        thumbnail
        thumbnailAlt
        subTitle
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

const BlogPost = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { date: dateCreated, title, tags }
    }
  },
  pageContext: { pagePrev, pageNext }
}) => (
  <Layout>
    <BlogPostPageTemplate
      content={html}
      contentComponent={HTMLContent}
      tags={tags}
      title={title}
      dateCreated={dateCreated}
      pagePrev={pagePrev}
      pageNext={pageNext}
    />
  </Layout>
);

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default BlogPost;
