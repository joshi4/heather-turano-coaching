import React, { FC } from "react";
import { PostOrPage } from "@tryghost/content-api";
import { BlogType } from "@heather-turano-coaching/components/dist/blog/blog.types";

import {
  BlogCardContainer,
  BlogCardImage,
  useBreakpoints,
  Heading,
  BlogCardAvatar,
  Copy,
  makeFlex
} from "@heather-turano-coaching/components";
import { formatLongDate } from "../../utils";
import { TagsSection } from "..";
import { NextLink } from "../general";
import styled from "styled-components";
import {
  makeColor,
  makeInset,
  makeResponsive,
  makeOutset,
  makeRhythm
} from "@heather-turano-coaching/design-system/utils";

interface BlogPost {
  post: PostOrPage;
  blogType: BlogType;
}

const StyledRegularBlogCardContainer = styled.div`
  ${makeOutset({ bottom: 24 })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      position: relative;
      ${makeFlex("row", "flex-start", "stretch")};
      transition: all 0.2s ease-in-out;

      &:hover {
        cursor: pointer;
        transform: scale(1.01);
        box-shadow: 0 2px 15px 0px ${makeColor({
          scalable: { color: "gray" }
        })};
      }
    `
  })};
`;

const StyledCardContent = styled.div`
  position: relative;
  ${makeInset({ horizontal: 24, vertical: 32 })};
  background: ${makeColor({ fixed: "light" })};

  h3,
  h4 {
    ${makeRhythm({ fontSize: "xs", top: 0, bottom: 1 })};
    line-height: 1.3;
  }
  & > p {
    ${makeRhythm({ fontSize: "xs", top: 1, bottom: 2 })};
  }
`;

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
  const Tags = (
    <TagsSection
      tags={tags}
      filter="categories"
      alignment={isWindowMobile ? "left" : "right"}
    />
  );

  return (
    <NextLink href={`/post/${slug}`}>
      <StyledRegularBlogCardContainer>
        <BlogCardContainer blogType="regular">
          <BlogCardImage blogType="regular">
            <img src={feature_image as string} alt={slug} />
          </BlogCardImage>
          <StyledCardContent>
            {!isWindowMobile && Tags}
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
            {isWindowMobile && Tags}
          </StyledCardContent>
        </BlogCardContainer>
      </StyledRegularBlogCardContainer>
    </NextLink>
  );
};
