import React, { FC } from "react";
import styled from "styled-components";
import { TagGroup } from "../tags";

import {
  BaseBlog,
  BlogAuthor,
  BlogSocialOptions,
  BlogMetaInformation
} from "./blog.types";

type BlogProps = BaseBlog & {
  user: BlogAuthor;
  meta: BlogMetaInformation;
  social: BlogSocialOptions;
  title: string;
  content: string; // predict markdown
  tags: TagGroup[];
  prevBlogRoute: string;
  nextBlogRoute: string;
};

const StyledBlog = styled.div``;

export const Blog: FC<BlogProps> = ({ children }) => (
  <StyledBlog>{children}</StyledBlog>
);
