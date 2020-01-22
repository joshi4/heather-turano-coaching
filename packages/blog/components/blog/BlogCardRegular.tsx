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
  useBreakpoints,
  Heading,
  BlogCardAvatar,
  Copy
} from "@heather-turano-coaching/components";
import { formatLongDate } from "../../utils";
import { TagsSection } from "..";
import { NextLink } from "../general";
import styled from "styled-components";

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

const StyledCardContent = styled.div``;

export const BlogPost: FC<BlogPost> = ({
  post: { feature_image, slug, authors, published_at, title, excerpt, tags }
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;

  const authorName = authors ? (authors[0].name as string) : "";
  const avatarImg = authors ? (authors[0].profile_image as string) : "";
  const datePublished = formatLongDate(published_at as string);
  const pTitle = title as string;
  const pExcerpt = excerpt as string;

  return (
    <NextLink href={`/post/${slug}`}>
      <BlogCardContainer blogType="regular">
        <BlogCardImage blogType="regular">
          <img src={feature_image as string} alt={slug} />
        </BlogCardImage>
        <StyledCardContent>
          <TagsSection tags={tags} filter="categories" alignment="right" />
          <Heading
            fontSize={isWindowMobile ? "h4" : "h3"}
            fontColor={{ fixed: "dark" }}
          >
            {pTitle}
          </Heading>
          <BlogCardAvatar
            authorName={authorName}
            avatarImg={avatarImg}
            datePublished={datePublished}
            layoutType="inline"
          />
          <Copy
            type="paragraph"
            fontSize={{ custom: 14 }}
            fontColor={{ fixed: "dark" }}
          >
            {pExcerpt}
          </Copy>
        </StyledCardContent>
      </BlogCardContainer>
    </NextLink>
  );
};
