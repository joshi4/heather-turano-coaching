import React, { FC } from "react";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import { PostOrPage } from "@tryghost/content-api";
import { BlogPostList } from "../blog";

interface BlockRecentPostsProps {
  posts: PostOrPage[];
}

export const BlockRecentPosts: FC<BlockRecentPostsProps> = ({ posts }) => (
  <LayoutBlock>
    <LayoutBlockTitle title="Recent Posts" />
    <LayoutBlockContent>
      <BlogPostList posts={posts} />
    </LayoutBlockContent>
  </LayoutBlock>
);
