import React from "react";

import { BlogAvatar } from "./BlogAvatar";

import { blogAuthor, blogMeta } from "../../.storybook/contants";

export default {
  component: BlogAvatar,
  title: "Blog|Avatar"
};

export const stacked = () => (
  <BlogAvatar type="stacked" {...blogMeta} {...blogAuthor} />
);

export const inline = () => (
  <BlogAvatar type="inline" {...blogMeta} {...blogAuthor} />
);
