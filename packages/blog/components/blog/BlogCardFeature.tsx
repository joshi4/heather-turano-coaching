import React, { FC } from "react";
import { PostOrPage } from "@tryghost/content-api";
import {
  BlogCardContainer,
  BlogCardImage,
  Button,
  useBreakpoints,
  Heading,
  Copy,
  // BlogCardAvatar,
  Avatar
} from "@heather-turano-coaching/components";
// import { formatLongDate } from "../../utils";
import { TagsSection } from "../sections";
import { NextLink } from "../general";
import styled from "styled-components";
import {
  makeInset,
  makeRhythm,
  makeSize
} from "@heather-turano-coaching/design-system/utils";

interface BlogCardFeatureProps {
  featuredPost: PostOrPage;
}

const StyledCardContent = styled.div`
  ${makeInset({ horizontal: 24, top: 32 })};
  position: relative;

  h3,
  h4 {
    ${makeRhythm({ fontSize: "xs", top: 0, bottom: 1 })}
  }
  p {
    ${makeRhythm({ fontSize: "xs", top: 1, bottom: 1 })}
  }
`;

const StyledAvatarContainer = styled.div`
  position: absolute;
  left: ${makeSize("sm")};
  top: ${`calc(${makeSize("xxl")} / -2)`};
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
    <BlogCardContainer blogType="featured">
      <BlogCardImage blogType="featured">
        <img src={fp.feature_image as string} alt={fp.slug} />
      </BlogCardImage>
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
    </BlogCardContainer>
  );
};
