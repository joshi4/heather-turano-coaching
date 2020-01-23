import React, { FC } from "react";
import { PostOrPage } from "@tryghost/content-api";
import { BlogType } from "@heather-turano-coaching/components/dist/blog/blog.types";

import {
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
  makeRhythm,
  makeSize
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
    `
  })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      position: relative;
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

const StyledBlogImage = styled.div`
  img {
    width: 100%;
    height: ${makeSize({ custom: 200 })};
    object-fit: cover;
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      width: 40%;

      img {
        width: 100%;
        height: 100%;
      }
    `
  })}
`;

const StyledCardContent = styled.div`
  position: relative;
  ${makeInset({ horizontal: 24, vertical: 32 })};
  background: ${makeColor({ fixed: "light" })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeInset({ horizontal: 36, vertical: 32 })};
    `
  })}

  h3,
  h4 {
    ${makeRhythm({ fontSize: "xs", top: 0, bottom: 1 })};
    line-height: 1.2;

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        ${makeRhythm({ fontSize: "sm", top: 2, bottom: 1 })};
      `
    })}
  }

  & > p {
    ${makeRhythm({ fontSize: "xs", top: 1, bottom: 2 })};

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        ${makeRhythm({ fontSize: "sm", top: 1, bottom: 1 })};
      `
    })}
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      flex: 1;
    `
  })}
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
        <StyledBlogImage>
          <img src={feature_image as string} alt={slug} />
        </StyledBlogImage>
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
            fontSize={isWindowMobile ? { custom: 14 } : "sm"}
            fontColor={{ fixed: "dark" }}
          >
            {pExcerpt}
          </Copy>
          {isWindowMobile && Tags}
        </StyledCardContent>
      </StyledRegularBlogCardContainer>
    </NextLink>
  );
};
