import React, { FC } from "react";
import { Tag as TagType } from "@tryghost/content-api";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import { TagGroup, Tag } from "@heather-turano-coaching/components";
import { NextLink } from "../general";

interface BlockCategoriesListProps {
  categories: TagType[];
  title?: string;
}

export const BlockCategoriesList: FC<BlockCategoriesListProps> = ({
  categories,
  title = "Cateogories"
}) => (
  <LayoutBlock>
    <LayoutBlockTitle title={title} />
    <LayoutBlockContent>
      <TagGroup>
        {categories.map(category => (
          <NextLink key={category.id} href={`/categories/${category.slug}`}>
            <Tag tagType="category" text={category.name as string} />
          </NextLink>
        ))}
      </TagGroup>
    </LayoutBlockContent>
  </LayoutBlock>
);
