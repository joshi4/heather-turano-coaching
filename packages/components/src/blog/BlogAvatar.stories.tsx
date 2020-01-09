import React from "react";

import { BlogAvatar } from "./BlogAvatar";

import { blogAuthor, blogMeta } from "../../.storybook/contants";

export default {
  component: BlogAvatar,
  title: "Blog|Avatar"
};

export const featured = () => (
  <BlogAvatar type="featured" meta={blogMeta} author={blogAuthor} />
);

export const regular = () => (
  <BlogAvatar type="regular" meta={blogMeta} author={blogAuthor} />
);
