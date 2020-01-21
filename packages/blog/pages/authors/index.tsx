import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import {
  makeReset,
  makeSize,
  makeInset
} from "@heather-turano-coaching/design-system/utils";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn,
  NextLink
} from "../../components";
import { Author } from "@tryghost/content-api";
import { getAllAuthors, GetAllAuthorsApiResponse } from "../../api";
import { AvatarCard, makeFlex } from "@heather-turano-coaching/components";
import { universalHover } from "../../styles";

interface AuthorsPageProps {
  authors: Author[];
}

const StyledAuthorPageContent = styled.ul`
  ${makeReset("list")};
  ${makeFlex("row", "flex-start", "flex-start")};

  & > li {
    min-width: ${makeSize({ custom: 280 })};
    align-self: stretch;
    flex-basis: 33.33%;

    &:not(:first-child) {
      ${makeInset({ left: 12 })};
    }
    &:not(:last-child) {
      ${makeInset({ right: 12 })};
    }

    a {
      ${makeReset("anchor")};
      display: block;
      height: 100%;
      width: inherit;
      ${universalHover};
    }
  }
`;

export const AuthorsPage: NextPage<AuthorsPageProps> = ({ authors }) => (
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
          {authors.map(author => (
            <li key={author.id}>
              <NextLink href={`/authors/${author.slug}`}>
                <AvatarCard
                  authorName={author.name as string}
                  avatarImg={author.profile_image as string}
                  bio={author.bio}
                  featureImage={author.cover_image}
                />
              </NextLink>
            </li>
          ))}
        </StyledAuthorPageContent>
      </LayoutColumn>
    </LayoutContainer>
  </PageContainer>
);

AuthorsPage.getInitialProps = async () => {
  const [{ authors }] = await Promise.all<GetAllAuthorsApiResponse>([
    getAllAuthors()
  ]);

  return {
    authors
  };
};

export default AuthorsPage;
