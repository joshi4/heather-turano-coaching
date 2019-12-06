import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import { BlogList, BlogCard } from "../../components-app/blog";

const BlogCardList = () => (
  <StaticQuery
    query={graphql`
      query BlogCardListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { key: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                key
                prompt
                protected
                category
                thumbnail
                thumbnailAlt
                subTitle
                date(formatString: "MMMM DD, YYYY")
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges: posts } }) => (
      <BlogList>
        {posts &&
          posts.map(
            ({
              node: {
                id,
                fields: { slug: blogLinkRoute },
                frontmatter: {
                  category,
                  title,
                  prompt,
                  date: dateCreated,
                  thumbnail,
                  thumbnailAlt
                }
              }
            }) => (
              <BlogCard
                key={id}
                category={category}
                title={title}
                prompt={prompt}
                blogLinkRoute={blogLinkRoute}
                dateCreated={dateCreated}
                thumbnail={thumbnail}
                thumbnailAlt={thumbnailAlt}
              />
            )
          )}
      </BlogList>
    )}
  />
);

BlogCardList.propTypest = {
  posts: PropTypes.array.isRequired
};

export default BlogCardList;
