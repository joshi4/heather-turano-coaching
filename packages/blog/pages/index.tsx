import React, { Fragment } from "react";
import { NextPage } from "next";
import { PostObject, PostOrPage } from "@tryghost/content-api";
import styled from "styled-components";

import {
  BlogContainer,
  BlogCard,
  Section,
  Title,
  Copy,
  HeaderNav,
  HeaderNavLink,
  HeaderNavLinkContent,
  FooterNav,
  FooterNavLink,
  FooterNavLinkContent
} from "@heather-turano-coaching/components";

import { formatLongDate } from "../utils";
import { getAllPosts } from "../api";

type BaseNavItem = { label: string; route: string };

type IndexPageProps = PostObject & {
  featuredPost: PostOrPage[];
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

const IndexPage: NextPage<IndexPageProps> = ({
  featuredPost,
  posts,
  meta,
  headerNavLinks,
  footerNavLinks: { rightNavItems, terms }
}) => {
  console.log(featuredPost, posts, meta);
  const fp = featuredPost[0];

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
  const { posts, meta } = await getAllPosts();
  return {
    featuredPost: posts.filter(post => post.featured),
    posts: posts.filter(post => !post.featured),
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
