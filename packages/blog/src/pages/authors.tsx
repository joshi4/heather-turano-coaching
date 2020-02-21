import React, { FC } from "react";
import styled from "styled-components";
import {
  makeReset,
  makeSize,
  makeInset,
  makeResponsive,
  makeOutset
} from "@heather-turano-coaching/design-system/utils";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn,
  FrameworkLink,
  Layout
} from "../components";
import { Author } from "@tryghost/content-api";
import { AvatarCard, makeFlex } from "@heather-turano-coaching/components";
import { universalHover } from "../styles";
import { destructureNodes } from "../utils";
import { useStaticQuery, graphql } from "gatsby";

const StyledAuthorPageContent = styled.ul`
  ${makeReset("list")};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "flex-start", "flex-start")};
    `
  })}

  & > li {
    min-width: ${makeSize({ custom: 280 })};
    align-self: stretch;

    ${makeResponsive({
      endAt: "tabletPortrait",
      style: `
        ${makeOutset({ bottom: 24 })};
      `
    })}

    ${makeResponsive({
      beginAt: "tabletPortrait",
      style: `
      flex-basis: 50%;
        &:not(:first-child) {
          ${makeInset({ left: 12 })};
        }
        &:not(:last-child) {
          ${makeInset({ right: 12 })};
        }
      `
    })}

    ${makeResponsive({
      beginAt: "tabletLandscape",
      style: `
      flex-basis: 33.33%;
    `
    })}

    a {
      ${makeReset("anchor")};
      display: block;
      height: 100%;
      width: inherit;
      ${universalHover};
    }
  }
`;

export const AuthorsPage: FC = () => {
  const {
    allGhostAuthor: { edges }
  } = useStaticQuery(graphql`
    {
      allGhostAuthor(filter: { postCount: { gt: 0 } }) {
        edges {
          node {
            ...GhostAuthorFields
          }
        }
      }
    }
  `);

  const authors = destructureNodes<Author>(edges);

  return (
    <Layout>
      <PageContainer>
        <LayoutContainer layoutType="stacked">
          <LayoutColumn colWidth="100%">
            <PageHeader
              pageName="authors"
              pageTitle="All authors"
              titleColor={{ scalable: { color: "accent" } }}
            />
          </LayoutColumn>
        </LayoutContainer>
        <LayoutContainer>
          <LayoutColumn>
            <StyledAuthorPageContent>
              {authors.map((author: Author) => (
                <li key={author.id}>
                  <FrameworkLink to={`/authors/${author.slug}`}>
                    <AvatarCard
                      authorName={author.name as string}
                      avatarImg={author.profile_image as string}
                      bio={author.bio}
                      featureImage={author.cover_image}
                    />
                  </FrameworkLink>
                </li>
              ))}
            </StyledAuthorPageContent>
          </LayoutColumn>
        </LayoutContainer>
      </PageContainer>
    </Layout>
  );
};

export default AuthorsPage;
