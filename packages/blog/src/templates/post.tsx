import React, { FC } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import { PostOrPage } from "@tryghost/content-api";
import Helmet from "react-helmet";

import {
  Section,
  Hero,
  BlogCardAvatar,
  Heading,
  Content,
  BlogSocialLinks
} from "@heather-turano-coaching/components";
import {
  makeColor,
  makeRhythm
} from "@heather-turano-coaching/design-system/utils";

import { Layout, MetaData, TagsSection } from "../components";
import { formatLongDate } from "../utils";

interface BlogPostProps {
  data: {
    ghostPost: PostOrPage;
  };
  /**
   * @todo fix any
   */
  location: any;
}

const StyledBlogHero = styled.header``;
const StyledBlogHeading = styled.div`
  h2 {
    line-height: 1.2;
    color: ${makeColor({ fixed: "dark" })};
    ${makeRhythm({ top: 2, bottom: 1 })};
  }
`;

/**
 * Single post view (/:slug)
 *
 * This file renders a single post and loads all the content.
 *
 */
const PostPage: FC<BlogPostProps> = ({ data, location }) => {
  const {
    id,
    feature_image,
    primary_author,
    published_at,
    title,
    html,
    tags
  }: PostOrPage = data.ghostPost;

  return (
    <>
      <MetaData data={data} location={location} type="article" />
      <Layout>
        <StyledBlogHero>
          {feature_image && <Hero image={feature_image} alt="hero" />}
        </StyledBlogHero>
        <Section styleType="blog-page">
          <BlogCardAvatar
            layoutType={feature_image ? "stacked" : "inline"}
            authorName={primary_author?.name as string}
            avatarImg={primary_author?.profile_image as string}
            datePublished={formatLongDate(published_at as string)}
          />
          <StyledBlogHeading>
            <Heading fontSize="h2">{title}</Heading>
          </StyledBlogHeading>
          <Content htmlContent={html as string} />
          <TagsSection tags={tags} />
          <BlogSocialLinks
            linkStyle="grayscale"
            social={{
              facebook: "test-facebook",
              twitter: "test-twitter",
              pinterest: "test-pinterest",
              instagram: "test-instagram"
            }}
          />
        </Section>
        <Section styleType="blog-page">
          <Heading fontSize="h2">Comments</Heading>
          <script
            defer
            src={process.env.COMMENTO_ORIGIN}
            data-page-id={id}
          ></script>
          <div id="commento"></div>
        </Section>
      </Layout>
    </>
  );
};

export default PostPage;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
