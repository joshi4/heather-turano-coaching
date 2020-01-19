import React from "react";
import { NextPage } from "next";
import { PostObject } from "@tryghost/content-api";
import {
  getPostByTagSlug,
  GetPostByTagApiResponse,
  GetAllTagsApiResponse,
  getAllTags,
  getBlockSubscribe
} from "../../api";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn,
  BlogPostList,
  BlockTagsList,
  BlockSubscribe,
  BlockContributors
} from "../../components";

interface TagsPageProps {
  tag: string;
  tags: GetAllTagsApiResponse;
  posts: PostObject["posts"];
  blocks: {
    subscribe: any;
  };
}

const TagsPage: NextPage<TagsPageProps> = ({
  tag,
  tags,
  posts,
  blocks: { subscribe }
}) => (
  <PageContainer>
    <LayoutContainer layoutType="stacked">
      <LayoutColumn>
        <PageHeader
          pageTopic="tags"
          pageTitle={tag}
          titleColor={{ scalable: { color: "primary" } }}
        />
      </LayoutColumn>
    </LayoutContainer>
    <LayoutContainer>
      <LayoutColumn colWidth={700}>
        <BlogPostList posts={posts} />
      </LayoutColumn>
      <LayoutColumn>
        <BlockSubscribe subscribe={subscribe} />
        <BlockContributors posts={posts} />
        <BlockTagsList tags={tags.tags} />
      </LayoutColumn>
    </LayoutContainer>
  </PageContainer>
);

TagsPage.getInitialProps = async ({ query }) => {
  const [{ posts }, tags, subscribeBlock] = await Promise.all<
    GetPostByTagApiResponse,
    GetAllTagsApiResponse,
    any
  >([
    getPostByTagSlug(query.slug as string),
    getAllTags(),
    getBlockSubscribe()
  ]);

  return {
    tag: query.slug as string,
    tags: tags,
    posts: posts,
    blocks: {
      subscribe: subscribeBlock
    }
  };
};

export default TagsPage;
