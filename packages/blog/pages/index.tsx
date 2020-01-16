import React from "react";
import { NextPage } from "next";
import { PostObject, PostOrPage, TagsObject } from "@tryghost/content-api";
import styled from "styled-components";
import Link from "next/link";

import { BlogCard, makeFlex } from "@heather-turano-coaching/components";
import {
  makeSize,
  makeSpace,
  makeOutset,
  makeColor,
  makeReset
} from "@heather-turano-coaching/design-system/utils";

import {
  BlogFeature,
  BlogImage,
  LayoutContainer,
  LayoutColumn,
  LayoutBlock,
  LayoutBlockTitle,
  TagsSection
} from "../components";
import { formatLongDate } from "../utils";
import { getAllPosts, getAllTags } from "../api";
import { FeaturedCategory } from "../components/blocks/FeaturedCategory";

const mandala = require("../public/assets/mandala.png").default;

type IndexPageProps = PostObject & {
  featuredPosts: PostOrPage[];
  tags: TagsObject["tags"];
};

const StyledIndexPage = styled.div`
  height: 100%;
  width: 100%;
  background-image: linear-gradient(180deg, transparent 0%, #f4f5f5 8%);
  overflow: hidden;
  z-index: -2;

  &::after {
    content: "";
    position: absolute;
    display: block;
    background-image: url(${mandala});
    background-repeat: no-repeat;
    background-size: 100%;
    height: ${makeSize({ custom: 2400 })};
    width: 100vw;
    left: ${makeSpace({ custom: 408 })};
    top: ${makeSpace({ custom: 112 })};
    pointer-events: none;
  }

  & > * {
    z-index: 10;
  }
`;

const StyledBlogContainer = styled.a`
  ${makeReset("anchor")};
  position: relative;
  ${makeFlex("row", "flex-start", "stretch")};
  transition: all 0.2s ease-in-out;

  &:not(:first-child) {
    ${makeOutset({ top: 24 })};
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 0 2px 15px 0px ${makeColor({ scalable: { color: "gray" } })};
  }
`;

export const logos = {
  stacked: require("../public/assets/htc-logo-stacked.svg").default,
  inline: require("../public/assets/htc-logo-inline.svg").default
};

const IndexPage: NextPage<IndexPageProps> = ({
  featuredPosts,
  posts,
  tags
}) => {
  return (
    <StyledIndexPage>
      <LayoutContainer layoutType="stacked">
        <BlogFeature featuredPosts={featuredPosts} />
      </LayoutContainer>
      <LayoutContainer>
        <LayoutColumn colWidth={628}>
          <LayoutBlock>
            <LayoutBlockTitle title="Featured Category" />
            <FeaturedCategory tags={tags} />
          </LayoutBlock>
          <LayoutBlock>
            <LayoutBlockTitle title="Recent Posts" />
            {posts.map(({ authors, tags, slug, ...post }) => (
              <Link key={post.id} href={`/post/[slug]`} as={`/post/${slug}`}>
                <StyledBlogContainer>
                  <BlogImage blogType="regular">
                    <img src={post.feature_image as string} alt={slug} />
                  </BlogImage>
                  <BlogCard
                    type="regular"
                    authorName={authors ? (authors[0].name as string) : ""}
                    avatarImg={
                      authors ? (authors[0].profile_image as string) : ""
                    }
                    datePublished={formatLongDate(post.published_at as string)}
                    title={post.title as string}
                    excerpt={post.excerpt as string}
                    tags={
                      <TagsSection
                        tags={tags}
                        filter="categories"
                        alignment="right"
                      />
                    }
                  />
                </StyledBlogContainer>
              </Link>
            ))}
          </LayoutBlock>
        </LayoutColumn>
        <LayoutColumn>
          <LayoutBlock>
            <LayoutBlockTitle title="Subscribe" />
            <div>testing</div>
          </LayoutBlock>
          <LayoutBlock>
            <LayoutBlockTitle title="Daily Inspiration" />
            <div>testing</div>
          </LayoutBlock>
          <LayoutBlock>
            <LayoutBlockTitle title="Recent Contributors" />
            <div>testing</div>
          </LayoutBlock>
        </LayoutColumn>
      </LayoutContainer>
    </StyledIndexPage>
  );
};

IndexPage.getInitialProps = async (): Promise<IndexPageProps> => {
  const [{ posts, meta }, { tags }] = await Promise.all([
    getAllPosts(),
    getAllTags()
  ]);
  return {
    featuredPosts: posts
      .filter(post => post.featured)
      .filter((_post, index) => index < 3),
    posts: posts.filter(post => !post.featured),
    meta: meta,
    tags
  };
};

export default IndexPage;
