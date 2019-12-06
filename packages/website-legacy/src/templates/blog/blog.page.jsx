import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components-gatsby";
import BlogPageTemplate from "./blog.template";

export const pageQuery = graphql`
  query BlogPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        body
        prompt
        form {
          firstNamePlaceholder
          emailAddressPlaceholder
          submitLabel
        }
      }
    }
  }
`;

const Blog = ({
  data: {
    markdownRemark: {
      frontmatter: { title, body, prompt, form }
    }
  }
}) => (
  <Layout>
    <Helmet
      title="Blog | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <BlogPageTemplate title={title} body={body} prompt={prompt} form={form} />
  </Layout>
);

Blog.propTypes = {
  data: PropTypes.object.isRequired
};

export default Blog;
