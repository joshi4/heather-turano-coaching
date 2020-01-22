import React, { FC } from "react";
import { PostOrPage } from "@tryghost/content-api";
import {
  BlogCardContainer,
  BlogCardContent,
  BlogCardImage,
  Button,
  useBreakpoints
} from "@heather-turano-coaching/components";
import { formatLongDate } from "../../utils";
import { TagsSection } from "../sections";
import { NextLink } from "../general";

interface BlogCardFeatureProps {
  featuredPost: PostOrPage;
}

export const BlogCardFeature: FC<BlogCardFeatureProps> = ({
  featuredPost: fp
}) => {
  const [windowWidth, { tabletPortrait }] = useBreakpoints();
  const isWindowMobile = windowWidth < tabletPortrait;

  const authorName = fp.authors ? (fp.authors[0].name as string) : "";
  const avatarImg = fp.authors ? (fp.authors[0].profile_image as string) : "";
  const datePublished = formatLongDate(fp.published_at as string);
  const title = fp.title as string;
  const excerpt = fp.excerpt as string;
  const tags = (
    <TagsSection tags={fp.tags} alignment="right" filter="categories" />
  );

  return (
    <BlogCardContainer blogType="featured">
      <BlogCardImage blogType="featured">
        <img src={fp.feature_image as string} alt={fp.slug} />
      </BlogCardImage>
      <BlogCardContent
        blogType="featured"
        authorName={authorName}
        avatarImg={avatarImg}
        datePublished={datePublished}
        title={title}
        excerpt={excerpt}
        tags={tags}
      >
        {!isWindowMobile && (
          <NextLink href={`/post/${fp.slug}`}>
            <Button styleType="primary" label="Read more" />
          </NextLink>
        )}
      </BlogCardContent>
    </BlogCardContainer>
  );
};
