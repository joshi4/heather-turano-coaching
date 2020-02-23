import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";

export const TagRoute = ({
  pageContext: { tag },
  data: {
    allMarkdownRemark: { totalCount, edges },
    site: {
      siteMetadata: { title }
    }
  }
}) => {
  return (
    <section className="section">
      <Helmet title={`${tag} | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h3 className="title is-size-4 is-bold-light">{`${totalCount} post${
              totalCount === 1 ? "" : "s"
            } tagged with “${tag}”`}</h3>
            <ul className="taglist">
              {edges.map(post => (
                <li key={post.node.fields.slug}>
                  <Link to={post.node.fields.slug}>
                    <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
                  </Link>
                </li>
              ))}
            </ul>
            <p>
              <Link to="/tags">Browse all tags</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

TagRoute.propTypes = {
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
