import React from "react";
import { NextPage } from "next";
import { PostObject, TagsObject } from "@tryghost/content-api";
import {
  getPostByTagSlug,
  getBlockSubscribe,
  GetPostByTagApiResponse,
  getAllTagsInPosts
} from "../../api";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn,
  BlogPostList,
  BlockSubscribe,
  BlockContributors,
  BlockTagsList
} from "../../components";
import { categoryDelimiter, filterOutCategoriesFromTags } from "../../utils";

interface CategoryPageProps {
  category: string;
  tags: TagsObject["tags"];
  posts: PostObject["posts"];
  blocks: {
    subscribe: any;
  };
}

const CategoryPage: NextPage<CategoryPageProps> = ({
  tags,
  category,
  posts,
  blocks: { subscribe }
}) => (
  <PageContainer>
    <LayoutContainer layoutType="stacked">
      <LayoutColumn>
        <PageHeader pageName="category" pageTitle={category} />
      </LayoutColumn>
    </LayoutContainer>
    <LayoutContainer>
      <LayoutColumn colWidth={700}>
        <BlogPostList posts={posts} />
      </LayoutColumn>
      <LayoutColumn>
        <BlockSubscribe subscribe={subscribe} displayBlockTitle={false} />
        <BlockContributors title="Authors of this category" posts={posts} />
        <BlockTagsList title="Tags in this category" tags={tags} />
      </LayoutColumn>
    </LayoutContainer>
  </PageContainer>
);

CategoryPage.getInitialProps = async ({ query }) => {
  const [{ posts }, blockSubscribe] = await Promise.all<
    GetPostByTagApiResponse,
    any
  >([getPostByTagSlug(query.slug as string), getBlockSubscribe()]);

  console.log(posts);

  const { tags } = await getAllTagsInPosts({
    postIds: posts.map(post => post.id)
  });

  return {
    category: (query.slug as string).split(categoryDelimiter)[1],
    tags: filterOutCategoriesFromTags(tags),
    posts: posts,
    blocks: {
      subscribe: blockSubscribe
    }
  };
};

export default CategoryPage;
