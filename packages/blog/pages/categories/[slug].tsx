import React from "react";
import { NextPage } from "next";
import { PostObject } from "@tryghost/content-api";
import {
  getPostByTagSlug,
  getAllCategories,
  GetPostByTagApiResponse,
  GetAllCategoriesApiResponse
} from "../../api";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn,
  BlogPostList,
  BlockCategoriesList,
  BlockSubscribe,
  BlockContributors
} from "../../components";
import { categoryDelimiter } from "../../utils";

interface CategoryPageProps {
  category: string;
  categories: GetAllCategoriesApiResponse;
  posts: PostObject["posts"];
}

const CategoryPage: NextPage<CategoryPageProps> = ({
  categories,
  category,
  posts
}) => {
  console.log(categories);
  return (
    <PageContainer>
      <LayoutContainer layoutType="stacked">
        <LayoutColumn>
          <PageHeader pageTopic="categories" pageTitle={category} />
        </LayoutColumn>
      </LayoutContainer>
      <LayoutContainer>
        <LayoutColumn colWidth={700}>
          <BlogPostList posts={posts} />
        </LayoutColumn>
        <LayoutColumn>
          <BlockSubscribe />
          <BlockContributors />
          <BlockCategoriesList categories={categories} />
        </LayoutColumn>
      </LayoutContainer>
    </PageContainer>
  );
};

CategoryPage.getInitialProps = async ({ query }) => {
  console.log(query);
  const [{ posts }, categories] = await Promise.all<
    GetPostByTagApiResponse,
    GetAllCategoriesApiResponse
  >([getPostByTagSlug(query.slug as string), getAllCategories()]);

  return {
    category: (query.slug as string).split(categoryDelimiter)[1],
    categories: categories,
    posts: posts
  };
};

export default CategoryPage;
