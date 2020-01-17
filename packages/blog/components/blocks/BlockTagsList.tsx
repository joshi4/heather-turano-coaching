import React, { FC } from "react";
import { Tag } from "@tryghost/content-api";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import { filterOutCategoriesFromTags } from "../../utils";

interface BlockTagsListProps {
  tags: Tag[];
}

export const BlockTagsList: FC<BlockTagsListProps> = ({ tags }) => (
  <LayoutBlock>
    <LayoutBlockTitle title="All Tags" />
    <LayoutBlockContent>
      {filterOutCategoriesFromTags(tags).map(tag => (
        <div>{tag.name}</div>
      ))}
    </LayoutBlockContent>
  </LayoutBlock>
);
