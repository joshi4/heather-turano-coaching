import React, { Fragment } from "react";
import { NextPage } from "next";
import { PostObject, PostOrPage, TagsObject } from "@tryghost/content-api";
import styled from "styled-components";

import {
  BlogContainer,
  BlogCard,
  HeaderNav,
  HeaderNavLink,
  HeaderNavLinkContent,
  FooterNav,
  FooterNavLink,
  FooterNavLinkContent
} from "@heather-turano-coaching/components";

import { formatLongDate } from "../utils";
import { getAllPosts, getAllTags } from "../api";
import { TagsSection } from "../components/TagsSection";
// import { CategorySection } from "../components/CategorySection";
import { ContinueReadingLink } from "../components";
import {
  LayoutContainer,
  LayoutColumn,
  LayoutBlock,
  LayoutBlockTitle
} from "../components/layout";
import {
  makeSize,
  makeSpace
} from "@heather-turano-coaching/design-system/utils";

const mandala = require("../public/assets/mandala.png").default;

type BaseNavItem = { label: string; route: string };

type IndexPageProps = PostObject & {
  featuredPost: PostOrPage[];
  tags: TagsObject;
  headerNavLinks: (BaseNavItem & { forceActiveState?: boolean })[];
  footerNavLinks: {
    leftNavItems?: BaseNavItem[];
    rightNavItems: BaseNavItem[];
    terms: BaseNavItem[];
  };
};

const StyledIndexPage = styled.div`
  height: 100%;
  width: 100%;
  z-index: -2;
  background-image: linear-gradient(180deg, transparent 0%, #f4f5f5 20%);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    display: block;
    background-image: url(${mandala});
    height: ${makeSize({ custom: 1700 })};
    min-width: ${makeSize({ custom: 1700 })};
    left: ${makeSpace({ custom: 408 })};
    top: ${makeSpace({ custom: 112 })};
    opacity: 0.5;
    z-index: -1;
  }
`;

const StyledBlogContainer = styled.div`
  position: relative;
`;

export const logos = {
  stacked: require("../public/assets/htc-logo-stacked.svg").default,
  inline: require("../public/assets/htc-logo-inline.svg").default
};

const IndexPage: NextPage<IndexPageProps> = ({
  // featuredPost,
  posts,
  // tags: { tags: allTags },
  headerNavLinks,
  footerNavLinks: { rightNavItems, terms }
}) => {
  // const fp = featuredPost[0];

  return (
    <>
      <HeaderNav
        homeRoute="https://heatherturanocoaching.com"
        logos={logos}
        navItems={headerNavLinks.map(({ label, route }) => (
          <HeaderNavLink key={label} forceActiveState={label === "blog"}>
            <a href={route}>
              <HeaderNavLinkContent>{label}</HeaderNavLinkContent>
            </a>
          </HeaderNavLink>
        ))}
      />
      <StyledIndexPage>
        {/* <CategorySection categories={allTags} /> */}
        {/* <BlogContainer
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
            tags={<TagsSection tags={fp.tags} />}
          >
            <ContinueReadingLink
              href={`/post/[slug]`}
              as={`/post/${fp.slug}`}
            />
          </BlogCard>
        </BlogContainer> */}
        <LayoutContainer>
          <LayoutColumn colWidth={628}>
            <LayoutBlock>
              <LayoutBlockTitle title="Featured Category" />
              <div>testing</div>
            </LayoutBlock>
            <LayoutBlock>
              <LayoutBlockTitle title="Recent Posts" />
              <StyledBlogContainer>
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
                        datePublished: formatLongDate(
                          post.published_at as string
                        )
                      }}
                      title={post.title as string}
                      excerpt={post.excerpt as string}
                      tags={<TagsSection tags={post.tags} alignment="right" />}
                    >
                      <ContinueReadingLink
                        href="post/[slug]"
                        as={`/post/${post.slug}`}
                      />
                    </BlogCard>
                  </BlogContainer>
                ))}
              </StyledBlogContainer>
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
      <FooterNav
        leftNav={{
          title: "Browse",
          items: headerNavLinks.map(({ label, route }) => (
            <FooterNavLink key={label}>
              <a href={route}>
                <FooterNavLinkContent>{label}</FooterNavLinkContent>
              </a>
            </FooterNavLink>
          ))
        }}
        rightNav={{
          title: "Explore",
          items:
            rightNavItems.length > 0
              ? rightNavItems.map(({ label, route }) => (
                  <FooterNavLink key={label}>
                    <a href={route}>
                      <FooterNavLinkContent>{label}</FooterNavLinkContent>
                    </a>
                  </FooterNavLink>
                ))
              : null
        }}
        terms={terms.map(({ label, route }, index) => (
          <Fragment key={label}>
            <FooterNavLink>
              <a href={route}>
                <FooterNavLinkContent>{label}</FooterNavLinkContent>
              </a>
            </FooterNavLink>
            {index !== terms.length - 1 && (
              <FooterNavLinkContent>&nbsp;|&nbsp;</FooterNavLinkContent>
            )}
          </Fragment>
        ))}
      />
    </>
  );
};

IndexPage.getInitialProps = async (): Promise<IndexPageProps> => {
  const [{ posts, meta }, tags] = await Promise.all([
    getAllPosts(),
    getAllTags()
  ]);
  return {
    featuredPost: posts.filter(post => post.featured),
    posts: posts.filter(post => !post.featured),
    tags: tags,
    meta: meta,
    headerNavLinks: [
      {
        label: "home",
        route: "https://heatherturanocoaching.com"
      },
      {
        label: "about",
        route: "https://heatherturanocoaching.com/about"
      },
      {
        label: "services",
        route: "https://heatherturanocoaching.com/services"
      },
      {
        label: "blog",
        route: "/",
        forceActiveState: true
      }
    ],
    footerNavLinks: {
      rightNavItems: [],
      terms: [
        {
          label: "Privacy Policy",
          route: "/privacy-policy"
        },
        {
          label: "Terms of Service",
          route: "/terms-of-service"
        },
        {
          label: "Cookie Policy",
          route: "/cookie-policy"
        }
      ]
    }
  };
};

export default IndexPage;
