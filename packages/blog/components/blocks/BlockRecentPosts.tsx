import React, { FC } from "react";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import { PostOrPage } from "@tryghost/content-api";
import { BlogPostList } from "../blog";

interface BlockRecentPostsProps {
  posts: PostOrPage[];
  title?: string;
}

export const BlockRecentPosts: FC<BlockRecentPostsProps> = ({
  title = "recent posts",
  posts
}) => (
  <LayoutBlock>
    <LayoutBlockTitle title={title} />
    <LayoutBlockContent>
      <BlogPostList posts={posts} />
    </LayoutBlockContent>
  </LayoutBlock>
);
