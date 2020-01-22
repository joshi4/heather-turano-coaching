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

type BlogCardContentProps = { blogType: BlogType } & BlogAuthor &
  BlogMetaInformation &
  Partial<BlogSocialOptions> & {
    tags?: ReactNode;
    title: string;
    excerpt: string;
  };

type CSSBlogCardContentMapFn = (
  social?: Pick<BlogCardContentProps, "social">
) => SimpleInterpolation;

const CSSBlogCardContentMap: {
  [key in BlogType]: CSSBlogCardContentMapFn;
} = {
  featured: () => css`
    position: relative;
    ${makeInset({ vertical: 20, horizontal: 32 })};

    h4 {
      line-height: 1.2;
      ${makeRhythm({ fontSize: "xs", top: 0, bottom: 1 })}
    }

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        ${makeInset({ vertical: 32, horizontal: 32 })};
        background: ${makeColor({ scalable: { color: "secondary" } })};
        h4 {
          ${makeRhythm({ fontSize: "sm", top: 1, bottom: 1 })};
        }
      `
    })}
  `,
  regular: social => css`
    h3 {
      line-height: 1.2;
      ${makeRhythm({ fontSize: "xs", top: 0, bottom: 1 })}
    }
    background: ${makeColor({ fixed: "light" })};
    ${makeInset({ top: 28, bottom: social ? 60 : 28, horizontal: 28 })};
    flex: 1;
  `
};

const StyledBlogCardContent = styled.div<
  Required<Pick<BlogCardContentProps, "blogType">> &
    Pick<BlogCardContentProps, "social">
>`
  ${({ blogType, social }) => CSSBlogCardContentMap[blogType]({ social })}
`;

const StyledExcerpt = styled.div<
  Required<Pick<BlogCardContentProps, "blogType">>
>`
  & > ul {
    position: absolute;

    ${({ blogType }) => {
      if (blogType === "featured") {
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

export const BlogCardContent: FC<BlogCardContentProps> = ({
  blogType,
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
    if (blogType === "featured" && isWindowMobile) {
      return { fixed: "dark" };
    }
    if (blogType === "featured" && !isWindowMobile) {
      return { fixed: "light" };
    }
    return { scalable: { color: "gray" } };
  };

  const derriveExcerptFontSize = (): FontProperties["fontSize"] => {
    if (blogType === "featured" && isWindowMobile) return "xs";
    if (blogType === "featured" && !isWindowMobile) return "sm";
    return "sm";
  };

  return (
    <StyledBlogCardContent blogType={blogType} social={social}>
      {(!isWindowMobile || blogType !== "featured") && tags}
      <Heading
        fontSize={isWindowMobile ? "h4" : "h3"}
        fontColor={derriveFontColor()}
      >
        {title}
      </Heading>
      {authorName && (
        <BlogAvatar
          layoutType="inline"
          avatarImg={avatarImg}
          authorName={authorName}
          datePublished={datePublished}
        />
      )}
      <StyledExcerpt blogType={blogType}>
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
            blogType === "regular" || isWindowMobile ? "horizontal" : "vertical"
          }
        />
      </StyledExcerpt>
      {children}
    </StyledBlogCardContent>
  );
};
