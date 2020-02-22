import React, { FC } from "react";
import { graphql } from "gatsby";

import { Author, PostOrPage } from "@tryghost/content-api";
import { Avatar, Copy, makeFlex } from "@heather-turano-coaching/components";
import { MetaData, Layout } from "../components";

import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn,
  LayoutBlockContent,
  LayoutBlock
} from "../components";

import {
  BlockSubscribe,
  BlockRecentPosts,
  BlockTagsList,
  BlockCategoriesList
} from "../features";

import styled from "styled-components";
import {
  makeInset,
  makeColor,
  makeOutset,
  makeResponsive
} from "@heather-turano-coaching/design-system/utils";
import {
  destructureNodes,
  getCategoriesFromTags,
  removeCategoriesFromTags
} from "../utils";
import { uniqBy } from "lodash";

const StyledBioBlock = styled.div`
  text-align: center;
  box-sizing: border-box;

  & * {
    box-sizing: border-box;
  }

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
      ${makeFlex("row", "flex-start", "stretch")};
    `
  })}
`;

const StyledBioArea = styled.div`
  ${makeInset({ horizontal: 24, vertical: 16 })};
  background: ${makeColor({ scalable: { color: "light", scale: 3 } })};
  width: 100%;
  align-self: stretch;

  ${makeFlex("row", "center", "center")};

  ${makeResponsive({
    beginAt: "tabletPortrait",
    style: `
    ${makeOutset({ left: 16 })};
    `
  })}
`;

const StyledBioPlaceholder = styled.div``;

/**
 * Author page (/author/:slug)
 *
 * Loads all posts for the requested author incl. pagination.
 */
const AuthorPage: FC<{ data: any; location: Location; pageContext: any }> = ({
  data,
  location
  // pageContext
}) => {
  const author: Author = data.ghostAuthor;
  const posts = destructureNodes<PostOrPage>(data.allGhostPost.edges);

  const tags = uniqBy(
    posts.flatMap(post => (post.tags ? post.tags : [])),
    "id"
  );

  const justCategories = getCategoriesFromTags(tags);
  const justTags = removeCategoriesFromTags(tags);

  return (
    <Layout>
      <MetaData data={data} location={location} type="profile" />
      <PageContainer>
        <LayoutContainer layoutType="stacked">
          <LayoutColumn>
            <PageHeader
              pageName="author"
              pageTitle={author.name as string}
              titleColor={{ scalable: { color: "accent" } }}
            />
          </LayoutColumn>
        </LayoutContainer>
        <LayoutContainer>
          <LayoutColumn colWidth={700}>
            <LayoutBlock>
              <LayoutBlockContent>
                <StyledBioBlock>
                  <Avatar
                    image={author.profile_image as string}
                    alt={author.name as string}
                    size={{ custom: 200 }}
                  />
                  <StyledBioArea>
                    <StyledBioPlaceholder>
                      {author.bio ? (
                        <Copy type="paragraph" fontSize="md">
                          {author.bio}
                        </Copy>
                      ) : (
                        <Copy type="paragraph" fontSize="md">
                          This author has not created a bio yet
                        </Copy>
                      )}
                    </StyledBioPlaceholder>
                  </StyledBioArea>
                </StyledBioBlock>
              </LayoutBlockContent>
            </LayoutBlock>
            <BlockRecentPosts posts={posts} />
          </LayoutColumn>
          <LayoutColumn>
            <BlockSubscribe />
            <BlockCategoriesList
              title="Categories from this author"
              categories={justCategories}
            />
            <BlockTagsList title="Tags from this author" tags={justTags} />
          </LayoutColumn>
        </LayoutContainer>
      </PageContainer>
    </Layout>
  );
};

export default AuthorPage;

export const pageQuery = graphql`
  query GhostAuthorQuery($slug: String!) {
    # Author Information
    ghostAuthor(slug: { eq: $slug }) {
      ...GhostAuthorFields
    }

    # Author posts
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { authors: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;