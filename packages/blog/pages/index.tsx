import React from "react";
import { NextPage } from "next";
import { PostObject, PostOrPage, TagsObject } from "@tryghost/content-api";

import {
  LayoutContainer,
  LayoutColumn,
  PageContainer,
  BlockSubscribe,
  BockDailyInspiration,
  BlockFeaturedPosts,
  BlockContributors,
  BlockRecentPosts,
  BlockFeaturedCategory,
  BlockTagsList
} from "../components";
import {
  getAllPosts,
  getAllTags,
  getDailyInspiration,
  getBlockSubscribe
} from "../api";
import { useBreakpoints } from "@heather-turano-coaching/components";

type IndexPageProps = PostObject & {
  featuredPosts: PostOrPage[];
  tags: TagsObject["tags"];
  blocks: {
    dailyInspiration: any;
    subscribe: any;
  };
};

export const logos = {
  stacked: require("../public/assets/htc-logo-stacked.svg").default,
  inline: require("../public/assets/htc-logo-inline.svg").default
};

const IndexPage: NextPage<IndexPageProps> = ({
  featuredPosts,
  posts,
  tags,
  blocks: { dailyInspiration, subscribe }
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;

  const AltColumn = (
    <LayoutColumn>
      <BlockSubscribe subscribe={subscribe} />
      <BockDailyInspiration dailyInspiration={dailyInspiration} />
      {!isWindowMobile && (
        <>
          <BlockContributors posts={posts} />
          <BlockTagsList tags={tags} title="Recent tags" limit={10} />
        </>
      )}
    </LayoutColumn>
  );
  const PostColumn = (
    <LayoutColumn colWidth={628}>
      <BlockFeaturedCategory tags={tags} />
      <BlockRecentPosts posts={posts} />
      {isWindowMobile && (
        <>
          <BlockContributors posts={posts} />
          <BlockTagsList tags={tags} title="Recent tags" limit={10} />
          <BlockSubscribe subscribe={subscribe} />
        </>
      )}
    </LayoutColumn>
  );

  return (
    <PageContainer>
      <LayoutContainer layoutType="stacked">
        <BlockFeaturedPosts featuredPosts={featuredPosts} />
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
  );
};

IndexPage.getInitialProps = async (): Promise<IndexPageProps> => {
  const [
    { posts, meta },
    { tags },
    dailyInspiration,
    subscribe
  ] = await Promise.all<PostObject, TagsObject, any, any>([
    getAllPosts(),
    getAllTags(),
    getDailyInspiration(),
    getBlockSubscribe()
  ]);
  return {
    featuredPosts: posts.filter(post => post.featured),
    posts: posts.filter(post => !post.featured),
    meta: meta,
    tags,
    blocks: {
      dailyInspiration,
      subscribe
    }
  };
};

export default IndexPage;
