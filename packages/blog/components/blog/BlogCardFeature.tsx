import React, { FC } from "react";
import { PostOrPage } from "@tryghost/content-api";
import {
  Button,
  useBreakpoints,
  Heading,
  Copy,
  Avatar,
  universalShadow
} from "@heather-turano-coaching/components";
import { TagsSection } from "../sections";
import { NextLink } from "../general";
import styled from "styled-components";
import {
  makeInset,
  makeRhythm,
  makeSize,
  makeResponsive,
  makeColor
} from "@heather-turano-coaching/design-system/utils";

interface BlogCardFeatureProps {
  featuredPost: PostOrPage;
}

const StyledFeaturedBlogCardContainer = styled.div`
  border-radius: ${makeSize({ custom: 8 })};
  overflow: hidden;
  box-shadow: ${universalShadow};
  background: ${makeColor({ fixed: "light" })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      position: relative;
      height: ${makeSize({ custom: 600 })};
      width: ${makeSize({ custom: 500 })};
    `
  })};
`;

const StyledCardContent = styled.div`
  position: relative;
  ${makeInset({ horizontal: 24, top: 32 })};
  background: ${makeColor({ fixed: "light" })};

  h3,
  h4 {
    line-height: 1.3;
    ${makeRhythm({ fontSize: "xs", top: 0, bottom: 1 })};
  }
  & > p {
    ${makeRhythm({ fontSize: "xs", top: 1, bottom: 1 })};
  }
`;

const StyledAvatarContainer = styled.div`
  position: absolute;
  left: ${makeSize("sm")};
  top: ${`calc(${makeSize("xxl")} / -2)`};
`;

const StyledBlogImage = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      height: ${makeSize({ custom: 240 })};
    `
  })}
`;

export const BlogCardFeature: FC<BlogCardFeatureProps> = ({
  featuredPost: fp
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;

  const authorName = fp.authors ? (fp.authors[0].name as string) : "";
  const avatarImg = fp.authors ? (fp.authors[0].profile_image as string) : "";
  // const datePublished = formatLongDate(fp.published_at as string);
  const title = fp.title as string;
  const excerpt = fp.excerpt as string;

  return (
    <StyledFeaturedBlogCardContainer>
      <StyledBlogImage>
        <img src={fp.feature_image as string} alt={fp.slug} />
      </StyledBlogImage>
      <StyledCardContent>
        <StyledAvatarContainer>
          <Avatar image={avatarImg} alt={authorName} size="xxl" />
          {/* <BlogCardAvatar
          authorName={authorName}
          avatarImg={avatarImg}
          datePublished={datePublished}
          layoutType="inline"
        /> */}
        </StyledAvatarContainer>
        {!isWindowMobile && (
          <TagsSection tags={fp.tags} alignment="right" filter="categories" />
        )}
        <Heading
          fontSize={isWindowMobile ? "h4" : "h3"}
          fontColor={{ fixed: "dark" }}
        >
          {title}
        </Heading>
        <Copy
          type="paragraph"
          fontSize={{ custom: 14 }}
          fontColor={{ fixed: "dark" }}
        >
          {excerpt}
        </Copy>

        {!isWindowMobile && (
          <NextLink href={`/post/${fp.slug}`}>
            <Button styleType="primary" label="Read more" />
          </NextLink>
        )}
      </StyledCardContent>
    </StyledFeaturedBlogCardContainer>
  );
};
