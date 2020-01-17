import React, { FC, useState } from "react";
import { PostOrPage } from "@tryghost/content-api";
import styled, { css } from "styled-components";
import {
  makeFlex,
  BlogCard,
  Button,
  Copy
} from "@heather-turano-coaching/components";
import {
  makeSize,
  makeColor,
  makeReset,
  makeInset,
  makeSpace,
  makeFont
} from "@heather-turano-coaching/design-system/utils";
import { formatLongDate } from "../../utils";
import { TagsSection } from "../sections";
import { BlogImage } from "./BlogImage";
import Link from "next/link";

const StyledFeaturedBlogContainer = styled.div`
  position: relative;
  ${makeFlex("row", "flex-start", "stretch")};
  max-height: ${makeSize({ custom: 580 })};
  height: ${makeSize({ custom: 580 })};
`;

const StyledFeatureBlogSelector = styled.div`
  ${makeFlex("row", "distribute-evently", "center")};
  background: ${makeColor({ fixed: "light" })};
`;

const StyledFeaturePostButton = styled.button.attrs({ type: "button" })<{
  isActive: boolean;
}>`
  ${makeReset("button")};
  width: 100%;
  align-self: stretch;
  ${makeInset({ vertical: 20, horizontal: 16 })};
  position: relative;
  text-align: left;

  &:not(:first-child) {
    &::after {
      content: "";
      position: absolute;
      left: -1px;
      top: ${makeSpace({ custom: 16 })};
      bottom: ${makeSpace({ custom: 16 })};
      background: ${makeColor({ scalable: { color: "gray", scale: 3 } })};
      width: ${makeSize({ custom: 1 })};
    }
  }

  &:hover {
    ${({ isActive }) =>
      !isActive &&
      css`
        & > p {
          color: ${makeColor({ scalable: { color: "secondary", scale: 1 } })};
          transition: color 0.15s ease-in-out;
        }
      `}
  }

  p {
    ${({ isActive }) => css`
      ${makeFont({
        fontSize: "xs",
        fontFamily: "Montserrat",
        fontWeight: isActive ? "medium" : "regular"
      })}
    `}
  }
`;

export const BlogFeature: FC<{ featuredPosts: PostOrPage[] }> = ({
  featuredPosts
}) => {
  const [fp, setFp] = useState<PostOrPage>(featuredPosts[0]);

  return (
    <>
      <StyledFeaturedBlogContainer>
        <BlogImage blogType="featured">
          <img src={fp.feature_image as string} alt={fp.slug} />
        </BlogImage>
        <BlogCard
          type="featured"
          authorName={fp.authors ? (fp.authors[0].name as string) : ""}
          avatarImg={fp.authors ? (fp.authors[0].profile_image as string) : ""}
          datePublished={formatLongDate(fp.published_at as string)}
          title={fp.title as string}
          excerpt={fp.excerpt as string}
          tags={
            <TagsSection tags={fp.tags} alignment="right" filter="categories" />
          }
        >
          <Link href={`/post/[slug]`} as={`/post/${fp.slug}`}>
            <a>
              <Button styleType="primary" label="Read more" />
            </a>
          </Link>
        </BlogCard>
      </StyledFeaturedBlogContainer>
      <StyledFeatureBlogSelector>
        {featuredPosts.map(featPost => (
          <StyledFeaturePostButton
            key={featPost.id}
            onClick={() => setFp(featPost)}
            isActive={featPost.id === fp.id}
          >
            <Copy
              type="label"
              fontSize="xs"
              fontColor={
                featPost.id === fp.id
                  ? { scalable: { color: "secondary" } }
                  : { scalable: { color: "gray", scale: 2 } }
              }
            >
              {featPost.title}
            </Copy>
          </StyledFeaturePostButton>
        ))}
      </StyledFeatureBlogSelector>
    </>
  );
};
