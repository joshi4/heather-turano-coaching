import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { makeReset } from "@heather-turano-coaching/design-system/utils";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn
} from "../../components";
import { Author } from "@tryghost/content-api";
import { getAllAuthors, GetAllAuthorsApiResponse } from "../../api";

interface AuthorsPageProps {
  authors: Author[];
}

const StyledAuthorPageContent = styled.ul`
  ${makeReset("list")};
`;

export const AuthorsPage: NextPage<AuthorsPageProps> = ({ authors }) => (
  <PageContainer>
    <LayoutContainer layoutType="stacked">
      <LayoutColumn>
        <PageHeader
          pageTopic="authors"
          pageTitle="All authors"
          titleColor={{ scalable: { color: "accent" } }}
        />
      </LayoutColumn>
    </LayoutContainer>
    <LayoutContainer>
      <LayoutColumn>
        <StyledAuthorPageContent>
          {authors.map(author => (
            <li key={author.id}>{author.name}</li>
          ))}
        </StyledAuthorPageContent>
      </LayoutColumn>
      <LayoutColumn></LayoutColumn>
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
