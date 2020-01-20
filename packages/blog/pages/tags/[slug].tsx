import React from "react";
import { NextPage } from "next";
import { PostObject, TagsObject } from "@tryghost/content-api";
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
import { filterOutCategoriesFromTags } from "../../utils";

interface TagsPageProps {
  tag: string;
  tags: TagsObject["tags"];
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
          pageName="tag"
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
        <BlockContributors title="Authors of tag posts" posts={posts} />
        <BlockTagsList title="recent tags" tags={tags} limit={10} />
      </LayoutColumn>
    </LayoutContainer>
  </PageContainer>
);

TagsPage.getInitialProps = async ({ query }) => {
  const [{ posts }, { tags }, subscribeBlock] = await Promise.all<
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
    tags: filterOutCategoriesFromTags(tags),
    posts: posts,
    blocks: {
      subscribe: subscribeBlock
    }
  };
};

export default TagsPage;
