import { useBreakpoints } from "@heather-turano-coaching/hooks";
import { graphql } from "gatsby";
import React from "react";

import {
  Layout,
  LayoutColumn,
  LayoutContainer,
  MetaData,
  PageContainer,
} from "../components";
import {
  BlockContributors,
  BlockFeaturedCategory,
  BlockFeaturedPosts,
  BlockRecentPosts,
  BlockSubscribe,
  BlockTagsList,
  BockDailyInspiration,
} from "../features";

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
// @ts-ignore
const BlogPage = ({ data, location, pageContext }) => {
  const posts = data.allGhostPost.edges;

  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;

  const AltColumn = (
    <LayoutColumn>
      <BlockSubscribe />
      <BockDailyInspiration />
      {!isWindowMobile && (
        <>
          <BlockContributors />
          <BlockTagsList title="Recent tags" limit={10} />
        </>
      )}
    </LayoutColumn>
  );
  const PostColumn = (
    <LayoutColumn colWidth={628}>
      <BlockFeaturedCategory />
      <BlockRecentPosts posts={posts} />
      {isWindowMobile && (
        <>
          <BlockContributors />
          <BlockTagsList title="Recent tags" limit={10} />
          <BlockSubscribe />
        </>
      )}
    </LayoutColumn>
  );

  return (
    <>
      <Layout pageTitle="Blog">
        <MetaData location={location} />
        <PageContainer>
          <LayoutContainer layoutType="stacked">
            <BlockFeaturedPosts />
          </LayoutContainer>
          <LayoutContainer>
            {isWindowMobile ? (
              <>
                {AltColumn}
                {PostColumn}
              </>
            ) : (
              <>
                {PostColumn}
                {AltColumn}
              </>
            )}
          </LayoutContainer>
        </PageContainer>
      </Layout>
    </>
  );
};

export default BlogPage;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query GhostPostQuery($limit: Int!, $skip: Int!) {
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
