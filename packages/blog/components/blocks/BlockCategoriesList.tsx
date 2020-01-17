import React, { FC } from "react";
import { Tag } from "@tryghost/content-api";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";

interface BlockCategoriesListProps {
  categories: Tag[];
}

export const BlockCategoriesList: FC<BlockCategoriesListProps> = ({
  categories
}) => (
  <LayoutBlock>
    <LayoutBlockTitle title="All categories" />
    <LayoutBlockContent>
      {categories.map(category => (
        <div>{category.name}</div>
      ))}
    </LayoutBlockContent>
  </LayoutBlock>
);
