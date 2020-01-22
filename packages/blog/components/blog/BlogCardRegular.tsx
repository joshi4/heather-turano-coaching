import React, { FC } from "react";
import { PostOrPage } from "@tryghost/content-api";
import { BlogType } from "@heather-turano-coaching/components/dist/blog/blog.types";
// import styled from "styled-components";
// import {
//   makeReset,
//   makeOutset,
//   makeColor
// } from "@heather-turano-coaching/design-system/utils";
import {
  // makeFlex,
  BlogCardContainer,
  BlogCardImage,
  BlogCardContent
} from "@heather-turano-coaching/components";
import { formatLongDate } from "../../utils";
import { TagsSection } from "..";
import { NextLink } from "../general";

interface BlogPost {
  post: PostOrPage;
  blogType: BlogType;
}

// const BlogCardContainer = styled.a`
//   ${makeReset("anchor")};
//   position: relative;
//   ${makeFlex("row", "flex-start", "stretch")};
//   transition: all 0.2s ease-in-out;

//   &:not(:first-child) {
//     ${makeOutset({ top: 24 })};
//   }

//   &:hover {
//     cursor: pointer;
//     transform: scale(1.01);
//     box-shadow: 0 2px 15px 0px ${makeColor({ scalable: { color: "gray" } })};
//   }
// `;

export const BlogPost: FC<BlogPost> = ({
  post: { feature_image, slug, authors, published_at, title, excerpt, tags }
}) => (
  <NextLink href={`/post/${slug}`}>
    <BlogCardContainer blogType="regular">
      <BlogCardImage blogType="regular">
        <img src={feature_image as string} alt={slug} />
      </BlogCardImage>
      <BlogCardContent
        blogType="regular"
        authorName={authors ? (authors[0].name as string) : ""}
        avatarImg={authors ? (authors[0].profile_image as string) : ""}
        datePublished={formatLongDate(published_at as string)}
        title={title as string}
        excerpt={excerpt as string}
        tags={<TagsSection tags={tags} filter="categories" alignment="right" />}
      />
    </BlogCardContainer>
  </NextLink>
);
