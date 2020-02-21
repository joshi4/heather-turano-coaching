import React, { FC } from "react";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn,
  TagCardSection,
  Layout
} from "../components";
import { Tag } from "@tryghost/content-api";
import { destructureNodes } from "../utils";
import { useStaticQuery, graphql } from "gatsby";

const CategoriesPage: FC = () => {
  const {
    allGhostTag: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostTag(filter: { name: { glob: "category-*" } }) {
        edges {
          node {
            slug
            name
            id
          }
        }
      }
    }
  `);
  const categories: Tag[] = destructureNodes(edges);

  return (
    <Layout>
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
              tags={categories.map(({ name, ...restCategory }) => ({
                name: name && name.split("-")[1],
                ...restCategory
              }))}
              tagType="category"
              page="categories"
            />
          </LayoutColumn>
        </LayoutContainer>
      </PageContainer>
    </Layout>
  );
};

export default CategoriesPage;
