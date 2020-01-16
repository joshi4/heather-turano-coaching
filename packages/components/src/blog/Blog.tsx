import React, { FC, ReactNode } from "react";
import styled from "styled-components";

import {
  BlogAuthor,
  BlogSocialOptions,
  BlogMetaInformation
} from "./blog.types";
import { Hero } from "../misc";
import { BlogAvatar } from "./BlogAvatar";
import { Heading, Content } from "../typography";
import { BlogSocialLinks } from "./BlogSocialLinks";
import { Section } from "../layouts";

type BlogProps = BlogAuthor &
  BlogMetaInformation &
  BlogSocialOptions & {
    heroImg?: string;
    heroAlt?: string;
    title: string;
    prevBlogRoute?: string;
    nextBlogRoute?: string;
    tags?: ReactNode;
    html: string;
  };

const StyledBlogHero = styled.header``;

export const Blog: FC<BlogProps> = ({
  authorName,
  avatarImg,
  datePublished,
  social,
  heroImg,
  heroAlt = "hero",
  title,
  tags,
  html
}) => (
  <>
    <StyledBlogHero>
      {heroImg && <Hero image={heroImg} alt={heroAlt} />}
    </StyledBlogHero>
    <Section styleType="blog-page">
      <BlogAvatar
        type={heroImg ? "stacked" : "inline"}
        authorName={authorName}
        avatarImg={avatarImg}
        datePublished={datePublished}
      />
      <Heading fontSize="h1">{title}</Heading>
      <Content htmlContent={html} />
      {tags}
      <BlogSocialLinks linkStyle="grayscale" social={social} />
    </Section>
  </>
);
