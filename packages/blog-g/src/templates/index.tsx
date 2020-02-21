import React from "react";
import { graphql } from "gatsby";

import {
  PageContainer,
  MetaData,
  Layout,
  LayoutContainer,
  LayoutColumn
} from "../components";

import {
  BlockSubscribe,
  BockDailyInspiration,
  BlockFeaturedPosts,
  BlockContributors,
  BlockRecentPosts,
  BlockFeaturedCategory,
  BlockTagsList
} from "../features";

import { useBreakpoints } from "@heather-turano-coaching/hooks";

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
// @ts-ignore
const Index = ({ data, location, pageContext }) => {
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
      <Layout>
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

export default Index;

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
