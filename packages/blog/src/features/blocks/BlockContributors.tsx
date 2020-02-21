import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import {
  LayoutBlockTitle,
  LayoutBlock,
  LayoutBlockContent,
  FrameworkLink
} from "../../components";
import { PostOrPage, Author } from "@tryghost/content-api";
import {
  AvatarListItem,
  RandomColor,
  generateRandomColor,
  ButtonAction
} from "@heather-turano-coaching/components";
import styled from "styled-components";
import {
  makeReset,
  makeSize,
  makeColor,
  makeOutset
} from "@heather-turano-coaching/design-system/utils";
import { destructureNodes } from "../../utils";
import { uniqBy } from "lodash";

interface BlockContributorsProps {
  title?: string;
  posts?: PostOrPage[];
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
  title = "Authors",
  posts
}) => {
  const {
    allGhostAuthor: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostAuthor(filter: { postCount: { gt: 0 } }) {
        edges {
          node {
            name
            cover_image
            profile_image
            bio
            id
            slug
          }
        }
      }
    }
  `);

  const postAuthors = posts
    ? uniqBy(
        posts.reduce<Author[]>(
          (accum, post) => [...accum, ...post.authors],
          []
        ),
        "id"
      )
    : destructureNodes(edges);

  return (
    <LayoutBlock>
      <LayoutBlockTitle title={title}>
        <FrameworkLink to="/authors">
          <ButtonAction
            buttonSize="md"
            buttonColor={{ scalable: { color: "gray", scale: 1 } }}
            icon="users"
            iconWeight="fad"
            title="View all contributors"
          />
        </FrameworkLink>
      </LayoutBlockTitle>
      <LayoutBlockContent>
        <StyledBlockContributors>
          {postAuthors.map((author: Author) => {
            const color = generateRandomColor();
            return (
              <StyledLinks hoverColor={color} key={author.id}>
                <FrameworkLink to={`/authors/${author.slug}`}>
                  <AvatarListItem
                    name={author.name as string}
                    image={author.profile_image as string}
                    alt={author.name as string}
                    accentColor={color}
                    bio={author.bio}
                  />
                </FrameworkLink>
              </StyledLinks>
            );
          })}
        </StyledBlockContributors>
      </LayoutBlockContent>
    </LayoutBlock>
  );
};
