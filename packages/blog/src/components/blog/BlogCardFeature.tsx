import React, { FC } from "react";
import { PostOrPage } from "@tryghost/content-api";
import {
  Button,
  Heading,
  Copy,
  Avatar,
  universalShadow,
  BlogCardAvatar,
  makeFlex
} from "@heather-turano-coaching/components";
import { TagsSection } from "../sections";
import { FrameworkLink } from "../general";
import { useBreakpoints } from "@heather-turano-coaching/hooks";
import styled from "styled-components";
import {
  makeInset,
  makeRhythm,
  makeSize,
  makeResponsive,
  makeColor
} from "@heather-turano-coaching/design-system/utils";
import { formatLongDate } from "../../utils";

interface BlogCardFeatureProps {
  featuredPost: PostOrPage;
}

const StyledFeaturedBlogCardContainer = styled.div`
  overflow: hidden;
  border-radius: ${makeSize({ custom: 8 })};

  & + * {
    border-radius: ${makeSize({ custom: 8 })};
  }

  ${makeResponsive({
    endAt: "tabletPortrait",
    style: `
      border-radius: ${makeSize({ custom: 8 })};
      box-shadow: ${universalShadow};
      background: ${makeColor({ fixed: "light" })};
    `
  })};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      position: relative;
      width: ${makeSize({ custom: 500 })};
    `
  })};

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      width: 100%;
      ${makeFlex("row", "flex-start", "stretch")};
      height: ${makeSize({ custom: 520 })};
      border-radius: 0;
    `
  })};
`;

const StyledBlogFeaturedImage = styled.div`
  img {
    width: 100%;
    height: ${makeSize({ custom: 140 })};
    object-fit: cover;
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      height: ${makeSize({ custom: 240 })};

      img {
        height: 100%;
      }
    `
  })}

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      height: initial;
      align-self: stretch;
      
      img {
          height: 100%;
          max-height: 100%;
          width: ${makeSize({ custom: 380 })};
        }
      `
  })};
`;

const StyledCardContent = styled.div`
  position: relative;
  ${makeInset({ horizontal: 24, top: 32 })};
  background: ${makeColor({ fixed: "light" })};
  height: ${makeSize({ custom: 384 })};

  h2,
  h3,
  h4 {
    line-height: 1.3;
    ${makeRhythm({ fontSize: "xs", top: 0, bottom: 1 })};

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
      ${makeRhythm({ fontSize: "xs", top: 1, bottom: 1 })};
    `
    })}
  }
  & > p {
    ${makeRhythm({ fontSize: "xs", top: 1, bottom: 1 })};
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      height: ${makeSize({ custom: 412 })};
      ${makeInset({ horizontal: 32, top: 32 })};
    `
  })}

  ${makeResponsive({
    beginAt: "tabletLandscape",
    style: `
      ${makeInset({ horizontal: 32, vertical: 32 })};
      background: ${makeColor({ scalable: { color: "secondary" } })};
      box-sizing: border-box;
      height: 100%;
    `
  })};
`;

const StyledAvatarContainer = styled.div`
  ${makeResponsive({
    endAt: "tabletPortrait",
    style: `
      position: absolute;
      left: ${makeSize("sm")};
      top: ${`calc(${makeSize({ custom: 42 })} / -1)`};
    `
  })}
`;

export const BlogCardFeature: FC<BlogCardFeatureProps> = ({
  featuredPost: fp
}) => {
  const [windowWidth, { tabletPortrait, tabletLandscape }] = useBreakpoints();

  const authorName = fp.authors ? (fp.authors[0].name as string) : "";
  const avatarImg = fp.authors ? (fp.authors[0].profile_image as string) : "";
  const datePublished = formatLongDate(fp.published_at as string);
  const title = fp.title as string;
  const excerpt = fp.excerpt as string;

  return (
    <StyledFeaturedBlogCardContainer>
      <StyledBlogFeaturedImage>
        <img src={fp.feature_image as string} alt={fp.slug} />
      </StyledBlogFeaturedImage>
      <StyledCardContent>
        {windowWidth < tabletPortrait && (
          <StyledAvatarContainer>
            <Avatar image={avatarImg} alt={authorName} size="xxl" />
          </StyledAvatarContainer>
        )}
        {!(windowWidth < tabletPortrait) && (
          <TagsSection
            tags={fp.tags}
            alignment={windowWidth < tabletLandscape ? "left" : "right"}
            filter="categories"
          />
        )}
        <Heading
          fontSize={windowWidth < tabletPortrait ? "h3" : "h2"}
          fontColor={{
            fixed: windowWidth >= tabletLandscape ? "light" : "dark"
          }}
        >
          {title}
        </Heading>
        {windowWidth >= tabletLandscape && (
          <BlogCardAvatar
            authorName={authorName}
            avatarImg={avatarImg}
            datePublished={datePublished}
            layoutType="inline"
            themeType={windowWidth >= tabletLandscape ? "light" : "dark"}
          />
        )}
        <Copy
          type="paragraph"
          fontSize={windowWidth < tabletPortrait ? { custom: 14 } : "sm"}
          fontColor={
            windowWidth >= tabletLandscape
              ? { fixed: "light" }
              : { scalable: { color: "gray", scale: 0 } }
          }
        >
          {excerpt}
        </Copy>

        {windowWidth >= tabletLandscape && (
          <FrameworkLink to={`/${fp.slug}`}>
            <Button styleType="primary" label="Read more" />
          </FrameworkLink>
        )}
      </StyledCardContent>
    </StyledFeaturedBlogCardContainer>
  );
};
