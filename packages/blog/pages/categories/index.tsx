import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { makeReset } from "@heather-turano-coaching/design-system/utils";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn
} from "../../components";
import { Author } from "@tryghost/content-api";
import { getAllCategories, GetAllCategoriesApiResponse } from "../../api";

interface CategoriesPageProps {
  categories: Author[];
}

const StyledAuthorPageContent = styled.ul`
  ${makeReset("list")};
`;

export const CategoriesPage: NextPage<CategoriesPageProps> = ({
  categories
}) => (
  <PageContainer>
    <LayoutContainer layoutType="stacked">
      <LayoutColumn>
        <PageHeader
          pageTopic="categories"
          pageTitle="All categories"
          titleColor={{ scalable: { color: "secondary" } }}
        />
      </LayoutColumn>
    </LayoutContainer>
    <LayoutContainer>
      <LayoutColumn>
        <StyledAuthorPageContent>
          {categories.map(category => (
            <li key={category.id}>{category.name}</li>
          ))}
        </StyledAuthorPageContent>
      </LayoutColumn>
      <LayoutColumn></LayoutColumn>
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
