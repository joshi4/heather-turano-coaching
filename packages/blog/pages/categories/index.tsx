import React from "react";
import { NextPage } from "next";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn,
  TagCardSection
} from "../../components";
import { Tag } from "@tryghost/content-api";
import { getAllCategories, GetAllCategoriesApiResponse } from "../../api";

interface CategoriesPageProps {
  categories: Tag[];
}

export const CategoriesPage: NextPage<CategoriesPageProps> = ({
  categories
}) => (
  <PageContainer>
    <LayoutContainer layoutType="stacked">
      <LayoutColumn>
        <PageHeader
          pageName="categories"
          pageTitle="All categories"
          titleColor={{ scalable: { color: "secondary" } }}
        />
      </LayoutColumn>
    </LayoutContainer>
    <LayoutContainer>
      <LayoutColumn>
        <TagCardSection
          tags={categories}
          tagType="category"
          page="categories"
        />
      </LayoutColumn>
    </LayoutContainer>
  </PageContainer>
);

CategoriesPage.getInitialProps = async () => {
  const [categories] = await Promise.all<GetAllCategoriesApiResponse>([
    getAllCategories()
  ]);

  return {
    categories
  };
};

export default CategoriesPage;
