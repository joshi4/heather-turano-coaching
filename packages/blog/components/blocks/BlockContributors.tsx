import React, { FC } from "react";
import { uniqBy } from "lodash";
import { LayoutBlockTitle, LayoutBlock, LayoutBlockContent } from "../layout";
import { PostOrPage, Author } from "@tryghost/content-api";
import {
  AvatarListItem,
  RandomColor,
  generateRandomColor
} from "@heather-turano-coaching/components";
import Link from "next/link";
import styled from "styled-components";
import {
  makeReset,
  makeSize,
  makeColor,
  makeOutset
} from "@heather-turano-coaching/design-system/utils";

interface BlockContributorsProps {
  title?: string;
  posts: PostOrPage[];
  filter?: "all" | "unique";
}

const StyledBlockContributors = styled.ul`
  ${makeReset("list")};
`;

const StyledLinks = styled.li<{ hoverColor: RandomColor }>`
  display: block;
  transition: border-color 0.15s ease-in-out;
  border: ${makeSize({ custom: 1 })} solid transparent;

  &:not(:first-child) {
    ${makeOutset({ top: 8 })};
  }

  a {
    ${makeReset("anchor")};
    width: 100%;
    display: block;
  }

  &:hover {
    cursor: pointer;
    border-color: ${({ hoverColor }) =>
      makeColor({
        scalable: { color: hoverColor, scale: 1 }
      })};
  }
`;

export const BlockContributors: FC<BlockContributorsProps> = ({
  title = "contributors",
  filter = "unique",
  posts
}) => {
  const authors = posts.reduce<Author[]>(
    (accum, post) => [...accum, ...post.authors],
    []
  );
  const postAuthors = filter === "unique" ? uniqBy(authors, "id") : authors;
  return (
    <LayoutBlock>
      <LayoutBlockTitle title={title} />
      <LayoutBlockContent>
        <StyledBlockContributors>
          {postAuthors.map(author => {
            const color = generateRandomColor();
            return (
              <StyledLinks hoverColor={color} key={author.id}>
                <Link href={`/authors/${author.slug}`}>
                  <a>
                    <AvatarListItem
                      name={author.name as string}
                      image={author.profile_image as string}
                      alt={author.name as string}
                      accentColor={color}
                      bio={author.bio}
                    />
                  </a>
                </Link>
              </StyledLinks>
            );
          })}
        </StyledBlockContributors>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
