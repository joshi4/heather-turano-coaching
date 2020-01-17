import React from "react";
import { NextPage } from "next";
import { PostObject } from "@tryghost/content-api";
import {
  getPostByTagSlug,
  GetPostByTagApiResponse,
  GetAllTagsApiResponse,
  getAllTags
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
}

const TagsPage: NextPage<TagsPageProps> = ({ tag, tags, posts }) => (
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
        <BlockSubscribe />
        <BlockContributors />
        <BlockTagsList tags={tags.tags} />
      </LayoutColumn>
    </LayoutContainer>
  </PageContainer>
);

TagsPage.getInitialProps = async ({ query }) => {
  console.log(query);
  const [{ posts }, tags] = await Promise.all<
    GetPostByTagApiResponse,
    GetAllTagsApiResponse
  >([getPostByTagSlug(query.slug as string), getAllTags()]);

  return {
    tag: query.slug as string,
    tags: tags,
    posts: posts
  };
};

export default TagsPage;
