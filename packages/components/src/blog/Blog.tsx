import React, { FC } from "react";
import styled from "styled-components";
import { TagGroup, TagGroupProps } from "../tags";

import {
  BlogAuthor,
  BlogSocialOptions,
  BlogMetaInformation
} from "./blog.types";
import { Hero } from "../misc";
import { BlogAvatar } from "./BlogAvatar";
import { Heading, VertialRhythm } from "../typography";
import { BlogSocialLinks } from "./BlogSocialLinks";
import { Section } from "../layouts";

type BlogProps = BlogAuthor &
  BlogMetaInformation &
  BlogSocialOptions &
  TagGroupProps & {
    heroImg?: string;
    heroAlt?: string;
    title: string;
    prevBlogRoute?: string;
    nextBlogRoute?: string;
  };

const StyledBlogHero = styled.header``;

export const Blog: FC<BlogProps> = ({
  author,
  meta,
  social,
  heroImg,
  heroAlt = "hero",
  title,
  children,
  tags
}) => (
  <>
    <StyledBlogHero>
      {heroImg && <Hero image={heroImg} alt={heroAlt} />}
    </StyledBlogHero>
    <Section styleType="blog-page">
      <BlogAvatar
        type={heroImg ? "stacked" : "inline"}
        author={author}
        meta={meta}
      />
      <VertialRhythm>
        <Heading fontSize="h1">{title}</Heading>
        {children}
      </VertialRhythm>
      {tags && <TagGroup tags={tags} />}
      <BlogSocialLinks linkStyle="grayscale" social={social} />
    </Section>
    {/* <Section styleType="blog-page"></Section> */}
  </>
);
