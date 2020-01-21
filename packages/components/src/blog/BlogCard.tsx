import React, { FC, ReactNode } from "react";
import styled, { css, SimpleInterpolation } from "styled-components";

import { Heading, Copy } from "../typography";
import {
  makeInset,
  makeResponsive,
  makeColor,
  // makeOutset,
  makeRhythm
} from "@heather-turano-coaching/design-system/utils";
import { useBreakpoints } from "../hooks";
import {
  BaseBlog,
  BlogAuthor,
  BlogSocialOptions,
  BlogMetaInformation,
  BlogType
} from "./blog.types";
import { BlogSocialLinks } from "./BlogSocialLinks";
import { BlogAvatar } from "./BlogAvatar";
import {
  ColorProperties,
  FontProperties
} from "@heather-turano-coaching/design-system/types/composite";

type BlogCardProps = BaseBlog &
  BlogAuthor &
  BlogMetaInformation &
  Partial<BlogSocialOptions> & {
    tags?: ReactNode;
    title: string;
    excerpt: string;
  };

type CSSBlogCardMapFn = (
  social?: Pick<BlogCardProps, "social">
) => SimpleInterpolation;

const CSSBlogCardMap: {
  [key in BlogType]: CSSBlogCardMapFn;
} = {
  featured: () => css`
    ${makeInset({ vertical: 20, horizontal: 32 })};
    h1,
    h2,
    h3,
    h4,
    h5 {
      ${makeRhythm({ fontSize: "xs", top: 0, bottom: 1 })}
    }

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        ${makeInset({ vertical: 32, horizontal: 32 })};
        background: ${makeColor({ scalable: { color: "secondary" } })};
      `
    })}
  `,
  regular: social => css`
    background: ${makeColor({ fixed: "light" })};
    ${makeInset({ top: 28, bottom: social ? 60 : 28, horizontal: 28 })};
    flex: 1;
  `
};

const StyledBlogCard = styled.div<
  Required<Pick<BlogCardProps, "type">> & Pick<BlogCardProps, "social">
>`
  ${({ type, social }) => CSSBlogCardMap[type]({ social })}
  position: relative;
  h2,
  h3,
  h4 {
    line-height: 1.2;
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      h2, h3, h4 {
        ${makeRhythm({ top: 1, bottom: 1 })};
      }
    `
  })}
`;

const StyledExcerpt = styled.div<Required<Pick<BlogCardProps, "type">>>`
  & > ul {
    position: absolute;

    ${({ type }) => {
      if (type === "featured") {
        return css`
          bottom: 0;

          ${makeResponsive({
            beginAt: "tabletPortrait",
            style: `
              right: 0;
              bottom: 30%;
            `
          })}
        `;
      }
      return css`
        bottom: 0;
      `;
    }}
  }

  & > p {
    ${makeRhythm({ top: 1, bottom: 1 })};
  }
`;

export const BlogCard: FC<BlogCardProps> = ({
  type,
  avatarImg,
  authorName,
  datePublished,
  title,
  social,
  excerpt,
  tags,
  children
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;

  const derriveFontColor = (): ColorProperties => {
    if (type === "featured" && isWindowMobile) {
      return { fixed: "dark" };
    }
    if (type === "featured" && !isWindowMobile) {
      return { fixed: "light" };
    }
    return { scalable: { color: "gray" } };
  };

  const derriveExcerptFontSize = (): FontProperties["fontSize"] => {
    if (type === "featured" && isWindowMobile) return "xs";
    if (type === "featured" && !isWindowMobile) return "sm";
    return "sm";
  };

  return (
    <StyledBlogCard type={type} social={social}>
      {(!isWindowMobile || type !== "featured") && tags}
      <Heading
        fontSize={isWindowMobile ? "h4" : "h3"}
        fontColor={derriveFontColor()}
      >
        {title}
      </Heading>
      {authorName && (
        <BlogAvatar
          type="inline"
          avatarImg={avatarImg}
          authorName={authorName}
          datePublished={datePublished}
        />
      )}
      <StyledExcerpt type={type}>
        <Copy
          type="paragraph"
          fontSize={derriveExcerptFontSize()}
          fontColor={derriveFontColor()}
        >
          {excerpt}
        </Copy>
        <BlogSocialLinks
          social={social}
          orientation={
            type === "regular" || isWindowMobile ? "horizontal" : "vertical"
          }
        />
      </StyledExcerpt>
      {children}
    </StyledBlogCard>
  );
};
