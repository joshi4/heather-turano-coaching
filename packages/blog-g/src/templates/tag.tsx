import React, { FC } from "react";
import { graphql } from "gatsby";
import { Tag, PostOrPage } from "@tryghost/content-api";

import {
  Layout,
  MetaData,
  PageContainer,
  LayoutContainer,
  LayoutColumn,
  PageHeader,
  BlogPostList
} from "../components";
import { BlockSubscribe, BlockContributors, BlockTagsList } from "../features";
import { destructureNodes } from "../utils";

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
interface TagsPageProps {
  data: {
    ghostTag: Tag;
    allGhostTag: {
      edges: {
        node: Tag;
      }[];
    };
    allGhostPost: {
      edges: {
        node: PostOrPage;
      }[];
    };
  };
  location: any;
  pageContext: any;
}

const TagPage: FC<TagsPageProps> = ({ data, location, pageContext }) => {
  const tag = data.ghostTag;
  const posts = destructureNodes(data.allGhostPost.edges);
  const tags = destructureNodes(data.allGhostTag.edges);

  return (
    <>
      <MetaData data={data} location={location} type="series" />
      <Layout>
        <PageContainer>
          <LayoutContainer layoutType="stacked">
            <LayoutColumn>
              <PageHeader
                pageName="tag"
                pageTitle={tag.name as string}
                titleColor={{ scalable: { color: "primary" } }}
              />
            </LayoutColumn>
          </LayoutContainer>
          <LayoutContainer>
            <LayoutColumn colWidth={700}>
              <BlogPostList posts={posts} />
            </LayoutColumn>
            <LayoutColumn>
              <BlockSubscribe displayBlockTitle={false} />
              <BlockContributors title="Authors of tag posts" posts={posts} />
              <BlockTagsList title="recent tags" tags={tags} />
            </LayoutColumn>
          </LayoutContainer>
        </PageContainer>
      </Layout>
    </>
  );
};

export default TagPage;

export const pageQuery = graphql`
  query GhostTagQuery($slug: String!) {
    # Tag Information
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }

    # Posts with Tag
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }

    # Recent Tags
    allGhostTag(filter: {}, limit: 10) {
      edges {
        node {
          ...GhostTagFields
        }
      }
    }
  }
`;
