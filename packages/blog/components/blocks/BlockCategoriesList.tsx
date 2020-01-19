import React, { FC } from "react";
import { Tag as TagType } from "@tryghost/content-api";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import Link from "next/link";
import { TagGroup, Tag } from "@heather-turano-coaching/components";

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
          <Link key={category.id} href={`/categories/${category.slug}`}>
            <a>
              <Tag tagType="category" text={category.name as string} />
            </a>
          </Link>
        ))}
      </TagGroup>
    </LayoutBlockContent>
  </LayoutBlock>
);
