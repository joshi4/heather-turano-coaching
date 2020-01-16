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
    background: ${makeColor({ scalable: { color: "secondary" } })};
    ${makeInset({ vertical: 20, horizontal: 16 })};

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
        ${makeInset({ vertical: 32, horizontal: 32 })};
      `
    })}
  `,
  regular: social => css`
    background: ${makeColor({ fixed: "light" })};
    ${makeInset({ top: 28, bottom: social ? 60 : 28, horizontal: 28 })};
  `
};

const StyledBlogCard = styled.div<
  Required<Pick<BlogCardProps, "type">> & Pick<BlogCardProps, "social">
>`
  position: relative;
  ${({ type, social }) => CSSBlogCardMap[type]({ social })}

  h2, h3, h4 {
    line-height: 1.2;
    ${makeRhythm({ top: 1, bottom: 1 })};
  }
`;

const StyledCopySection = styled.div<Required<Pick<BlogCardProps, "type">>>`
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

  return (
    <StyledBlogCard type={type} social={social}>
      {tags}
      <Heading
        fontSize="h3"
        fontColor={
          type === "featured"
            ? { fixed: "light" }
            : { scalable: { color: "gray" } }
        }
      >
        {title}
      </Heading>
      {type === "regular" && (
        <BlogAvatar
          type="inline"
          avatarImg={avatarImg}
          authorName={authorName}
          datePublished={datePublished}
        />
      )}
      <StyledCopySection type={type}>
        <Copy
          type="paragraph"
          fontSize={type === "featured" ? "sm" : "sm"}
          fontColor={
            type === "featured"
              ? { fixed: "light" }
              : { scalable: { color: "gray" } }
          }
        >
          {excerpt}
        </Copy>
        <BlogSocialLinks
          social={social}
          orientation={
            type === "regular" || windowWidth < tabletPortrait
              ? "horizontal"
              : "vertical"
          }
        />
      </StyledCopySection>
      {children}
    </StyledBlogCard>
  );
};
