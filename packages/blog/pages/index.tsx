import React from "react";
import { NextPage } from "next";
import { PostObject, PostOrPage } from "@tryghost/content-api";
import styled from "styled-components";

import {
  BlogContainer,
  BlogCard,
  Section,
  Title,
  Copy,
  HeaderNav
} from "@heather-turano-coaching/components";

import { formatLongDate } from "../utils";
import { getAllPosts } from "../api";

type IndexPageProps = PostObject & {
  featuredPost: PostOrPage[];
};

const StyledIndexPage = styled.div`
  height: 100%;
  width: 100%;
  z-index: -1;
  background-image: linear-gradient(180deg, transparent 0%, #f4f5f5 20%);
`;

const StyledBlogContainer = styled.div`
  position: relative;
`;

export const logos = {
  stacked: require("../public/assets/htc-logo-stacked.svg").default,
  inline: require("../public/assets/htc-logo-inline.svg").default
};

const IndexPage: NextPage<IndexPageProps> = ({ featuredPost, posts, meta }) => {
  console.log(featuredPost, posts, meta);
  const fp = featuredPost[0];

  return (
    <>
      <HeaderNav
        homeRoute="https://heatherturanocoaching.com"
        logos={logos}
        navItems={[
          {
            label: "Home",
            route: "https://heatherturanocoaching.com"
          },
          {
            label: "About",
            route: "https://heatherturanocoaching.com/about"
          },
          {
            label: "Services",
            route: "https://heatherturanocoaching.com/services"
          },
          {
            label: "Blog",
            route: "/",
            forceActiveState: true
          }
        ]}
      />
      <StyledIndexPage>
        <Section styleType="blank">
          <Title size="lg">Welcome to the community</Title>
          <Copy type="paragraph" fontSize="sm">
            Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam
            eget risus varius blandit sit amet non magna.
          </Copy>
        </Section>

        <StyledBlogContainer>
          <BlogContainer
            type="featured"
            imgSrc={fp.feature_image as string}
            imgAlt={fp.slug}
          >
            <BlogCard
              type="featured"
              author={{
                avatarImg: fp.authors
                  ? (fp.authors[0].profile_image as string)
                  : "avatar",
                name: fp.authors ? (fp.authors[0].name as string) : "avatar"
              }}
              meta={{
                datePublished: formatLongDate(fp.published_at as string)
              }}
              title={fp.title as string}
              excerpt={fp.excerpt as string}
            />
          </BlogContainer>
          {posts.map((post, index) => (
            <BlogContainer
              key={post.id}
              type="regular"
              imgSrc={post.feature_image as string}
              imgAlt={post.slug}
              contentSide={index % 2 ? "left" : "right"}
            >
              <BlogCard
                type="regular"
                author={{
                  avatarImg: post.authors
                    ? (post.authors[0].profile_image as string)
                    : "avatar",
                  name: post.authors
                    ? (post.authors[0].name as string)
                    : "avatar"
                }}
                meta={{
                  datePublished: formatLongDate(post.published_at as string)
                }}
                title={post.title as string}
                excerpt={post.excerpt as string}
              />
            </BlogContainer>
          ))}
        </StyledBlogContainer>
      </StyledIndexPage>
    </>
  );
};

IndexPage.getInitialProps = async (): Promise<IndexPageProps> => {
  const { posts, meta } = await getAllPosts();
  return {
    featuredPost: posts.filter(post => post.featured),
    posts: posts.filter(post => !post.featured),
    meta: meta
  };
};

export default IndexPage;
