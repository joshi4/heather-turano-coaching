import React from "react";

import { BlogCategories, BlogCategory } from "./BlogCategories";

export default {
  component: BlogCategories,
  title: "Blog|Blog Categories"
};

const categories: BlogCategory[] = [
  {
    label: "instant",
    route: "/fact",
    img: require("../../.storybook/assets/stock/backlit-beach-color.jpg")
  },
  {
    label: "aloud",
    route: "/close",
    img: require("../../.storybook/assets/stock/backlit-beach-clouds.jpg")
  },
  {
    label: "space",
    route: "/century",
    img: require("../../.storybook/assets/stock/beach-clouds-dawn.jpg")
  },
  {
    label: "replied",
    route: "/identity",
    img: require("../../.storybook/assets/stock/beautiful-bloom-blooming.jpg")
  },
  {
    label: "valley",
    route: "/cell",
    img: require("../../.storybook/assets/stock/aquatic-plant-beautiful-bloom.jpg")
  },
  {
    label: "rather",
    route: "/table",
    img: require("../../.storybook/assets/stock/aquatic-bloom-blooming.jpg")
  }
];

console.log(categories);

export const base = () => <BlogCategories categories={categories} />;
