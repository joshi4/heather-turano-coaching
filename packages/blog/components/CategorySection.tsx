import React, { FC } from "react";
import { Tag as GhostTag } from "@tryghost/content-api";
import { BlogCategories } from "@heather-turano-coaching/components";

interface CategorySectionProps {
  categories?: GhostTag[];
}

const testImage = require("../public/assets/backlit-beach-color.jpg");

export const CategorySection: FC<CategorySectionProps> = ({
  categories = []
}) => {
  const derrivedCats =
    categories.length > 0
      ? categories
          .filter(tag => tag.name?.includes("category-"))
          .map(category => ({
            label: (category.name as string).split("-")[1],
            route: `category/${category.slug}`,
            img: testImage
          }))
      : [];

  return derrivedCats.length > 0 ? (
    <BlogCategories categories={derrivedCats} />
  ) : null;
};
