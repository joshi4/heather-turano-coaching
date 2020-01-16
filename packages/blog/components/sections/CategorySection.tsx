import React, { FC } from "react";
import { Tag as GhostTag } from "@tryghost/content-api";
import {
  BlogCategories,
  BlogCategory
} from "@heather-turano-coaching/components";

interface CategorySectionProps {
  categories: GhostTag[];
}

type GetCategories = (categories?: GhostTag[]) => BlogCategory[];

const getCategories: GetCategories = (categories = []) =>
  categories
    .filter(tag => tag.name?.includes("category-"))
    .map(category => ({
      rawLabel: category.name as string,
      label: (category.name as string).split("-")[1],
      route: `category/${category.slug}`,
      img: category.feature_image as string
    }));

export const CategorySection: FC<CategorySectionProps> = ({
  categories = []
}) => {
  const cats = getCategories(categories);

  return <BlogCategories categories={cats} />;
};
