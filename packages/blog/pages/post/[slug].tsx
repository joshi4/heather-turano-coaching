import React from "react";
import { NextPage } from "next";
import { getPostBySlug } from "../../api";
import { PostOrPage } from "@tryghost/content-api";
import {
  Hero,
  Section,
  BlogAvatar,
  Heading,
  BlogSocialLinks,
  Content
} from "@heather-turano-coaching/components";
import { formatLongDate } from "../../utils";
import { TagsSection } from "../../components";
import styled from "styled-components";
import { makeRhythm } from "@heather-turano-coaching/design-system/utils";

interface BlogPostProps {
  blogPost: PostOrPage;
}

const StyledBlogHero = styled.header``;
const StyledBlogHeading = styled.div`
  h1 {
    line-height: 1.2;
    ${makeRhythm({ top: 1, bottom: 1 })};
  }
`;

const BlogPost: NextPage<BlogPostProps> = ({
  blogPost: { feature_image, primary_author, published_at, title, html, tags }
}) => (
  <>
    <StyledBlogHero>
      {feature_image && <Hero image={feature_image} alt="hero" />}
    </StyledBlogHero>
    <Section styleType="blog-page">
      <BlogAvatar
        type={feature_image ? "stacked" : "inline"}
        authorName={primary_author?.name as string}
        avatarImg={primary_author?.profile_image as string}
        datePublished={formatLongDate(published_at as string)}
      />
      <StyledBlogHeading>
        <Heading fontSize="h1">{title}</Heading>
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
  </>
);

BlogPost.getInitialProps = async ({ query }) => {
  const { posts } = await getPostBySlug(query.slug as string);

  return { blogPost: posts[0] };
};

export default BlogPost;
