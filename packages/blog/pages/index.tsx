import React from "react";
import { NextPage } from "next";
import { PostObject, PostOrPage, TagsObject } from "@tryghost/content-api";

import {
  BlogFeature,
  LayoutContainer,
  LayoutColumn,
  PageContainer,
  BlockSubscribe,
  BockDailyInspiration,
  BlockContributors,
  BlockRecentPosts,
  BlockFeaturedCategory
} from "../components";
import {
  getAllPosts,
  getAllTags,
  getDailyInspiration,
  getBlockSubscribe
} from "../api";

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
  return (
    <PageContainer>
      <LayoutContainer layoutType="stacked">
        <BlogFeature featuredPosts={featuredPosts} />
      </LayoutContainer>
      <LayoutContainer>
        <LayoutColumn colWidth={628}>
          <BlockFeaturedCategory tags={tags} />
          <BlockRecentPosts posts={posts} />
        </LayoutColumn>
        <LayoutColumn>
          <BlockSubscribe subscribe={subscribe} />
          <BockDailyInspiration dailyInspiration={dailyInspiration} />
          <BlockContributors posts={posts} />
        </LayoutColumn>
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
    featuredPosts: posts
      .filter(post => post.featured)
      .filter((_post, index) => index < 3),
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
