import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Tag as TagType } from "@tryghost/content-api";
import { TagGroup, Tag } from "@heather-turano-coaching/components";
import {
  LayoutBlockTitle,
  LayoutBlock,
  LayoutBlockContent,
  NextLink
} from "../../components";
import { destructureNodes } from "../../utils";

interface BlockCategoriesListProps {
  categories: TagType[];
  title?: string;
}

export const BlockCategoriesList: FC<BlockCategoriesListProps> = ({
  title = "Cateogories"
}) => {
  const {
    allGhostTag: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostTag(filter: { name: { glob: "category-*" } }) {
        edges {
          node {
            slug
            name
          }
        }
      }
    }
  `);

  const categories = destructureNodes(edges);

  return (
    <LayoutBlock>
      <LayoutBlockTitle title={title} />
      <LayoutBlockContent>
        <TagGroup>
          {categories.map((category: TagType) => (
            <NextLink key={category.id} href={`/categories/${category.slug}`}>
              <Tag tagType="category" text={category.name as string} />
            </NextLink>
          ))}
        </TagGroup>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
