import React, { FC } from "react";
import { PostOrPage } from "@tryghost/content-api";
import { BlogPost } from "./BlogPost";

interface BlogPostListProps {
  posts: PostOrPage[];
}

export const BlogPostList: FC<BlogPostListProps> = ({ posts }) => (
  <>
    {posts.map(post => (
      <BlogPost blogType="regular" post={post} />
    ))}
  </>
);
