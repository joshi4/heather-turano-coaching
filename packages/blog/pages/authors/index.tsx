import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import {
  makeReset,
  makeSize,
  makeInset,
  makeColor
} from "@heather-turano-coaching/design-system/utils";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn
} from "../../components";
import { Author } from "@tryghost/content-api";
import { getAllAuthors, GetAllAuthorsApiResponse } from "../../api";
import { AvatarCard, makeFlex } from "@heather-turano-coaching/components";
import Link from "next/link";

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
      transition: all 0.15s ease-in-out;

      &:hover {
        transform: scale(1.01);
        box-shadow: 0 2px 12px 0 ${makeColor({ scalable: { color: "gray" } })};
      }
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
              <Link href={`/authors/${author.slug}`}>
                <a>
                  <AvatarCard
                    authorName={author.name as string}
                    avatarImg={author.profile_image as string}
                    bio={author.bio}
                    featureImage={author.cover_image}
                  />
                </a>
              </Link>
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
