import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

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
  BlogMetaInformation
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

const StyledBlogCard = styled.div<
  Required<Pick<BlogCardProps, "type">> & Pick<BlogCardProps, "social">
>`
  position: relative;
  background: ${makeColor({ fixed: "light" })};
  ${({ type, social }) => {
    if (type === "featured") {
      return css`
        ${makeInset({ bottom: 60, horizontal: 32 })};

        ${makeResponsive({
          beginAt: "tabletPortrait",
          style: makeInset({ bottom: 60, horizontal: social ? 80 : 60 })
        })}
      `;
    }
    return css`
      ${makeInset({ top: 28, bottom: social ? 60 : 28, horizontal: 28 })};
    `;
  }}

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
  author,
  meta,
  title,
  social,
  excerpt,
  tags,
  children
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();

  return (
    <StyledBlogCard type={type} social={social}>
      {type === "featured" && (
        <BlogAvatar type="stacked" meta={meta} author={author} />
      )}
      {type === "regular" && tags}
      <Heading fontSize="h3" fontColor={{ scalable: { color: "gray" } }}>
        {title}
      </Heading>
      {type === "regular" && (
        <BlogAvatar type="inline" meta={meta} author={author} />
      )}
      <StyledCopySection type={type}>
        <Copy type="paragraph">{excerpt}</Copy>
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
      {type === "featured" && tags}
    </StyledBlogCard>
  );
};
