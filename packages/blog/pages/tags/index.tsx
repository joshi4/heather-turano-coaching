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
import {
  GetAllTagsSansCategoriesApiResponse,
  getAllTagsSansCategories
} from "../../api";

interface TagsPageProps {
  tags: Tag[];
}

export const TagsPage: NextPage<TagsPageProps> = ({ tags }) => (
  <PageContainer>
    <LayoutContainer layoutType="stacked">
      <LayoutColumn>
        <PageHeader
          pageName="tags"
          pageTitle="All tags"
          titleColor={{ scalable: { color: "primary" } }}
        />
      </LayoutColumn>
    </LayoutContainer>
    <LayoutContainer>
      <LayoutColumn colWidth="100%">
        <TagCardSection tags={tags} tagType="tag" page="tags" />
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
