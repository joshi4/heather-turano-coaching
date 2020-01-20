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
import { Tag } from "@tryghost/content-api";
import {
  GetAllTagsSansCategoriesApiResponse,
  getAllTagsSansCategories
} from "../../api";

interface TagsPageProps {
  tags: Tag[];
}

const StyledAuthorPageContent = styled.ul`
  ${makeReset("list")};
`;

export const TagsPage: NextPage<TagsPageProps> = ({ tags }) => (
  <PageContainer>
    <LayoutContainer layoutType="stacked">
      <LayoutColumn>
        <PageHeader
          pageTopic="tags"
          pageTitle="All tags"
          titleColor={{ scalable: { color: "primary" } }}
        />
      </LayoutColumn>
    </LayoutContainer>
    <LayoutContainer>
      <LayoutColumn>
        <StyledAuthorPageContent>
          {tags.map(tag => (
            <li key={tag.id}>{tag.name}</li>
          ))}
        </StyledAuthorPageContent>
      </LayoutColumn>
      <LayoutColumn></LayoutColumn>
    </LayoutContainer>
  </PageContainer>
);

TagsPage.getInitialProps = async () => {
  const [{ tags }] = await Promise.all<GetAllTagsSansCategoriesApiResponse>([
    getAllTagsSansCategories()
  ]);

  return {
    tags
  };
};

export default TagsPage;
