import React from "react";
import { NextPage } from "next";
import { Author, PostOrPage, Tag } from "@tryghost/content-api";
import { Avatar, Copy, makeFlex } from "@heather-turano-coaching/components";
import {
  getAuthorBySlug,
  getBlockSubscribe,
  GetAuthorBySlugApiResponse,
  GetPostsByAuthorSlugApiResponse,
  getPostsByAuthorSlug,
  getTagsAndCategoriesByAuthorSlug,
  GetTagsAndCategoriesByAuthorSlugApiResponse
} from "../../api";
import {
  PageContainer,
  LayoutContainer,
  PageHeader,
  LayoutColumn,
  BlockSubscribe,
  LayoutBlockContent,
  LayoutBlock,
  BlockRecentPosts,
  BlockTagsList,
  BlockCategoriesList
} from "../../components";

import styled from "styled-components";
import {
  makeInset,
  makeColor,
  makeOutset,
  makeResponsive
} from "@heather-turano-coaching/design-system/utils";

interface AuthorPageProps {
  posts: PostOrPage[];
  tags: Tag[];
  categories: Tag[];
  author: Author;
  blocks: {
    subscribe: any;
  };
}

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

const AuthorPage: NextPage<AuthorPageProps> = ({
  posts,
  tags,
  categories,
  author,
  blocks: { subscribe }
}) => (
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
        <BlockSubscribe subscribe={subscribe} />
        <BlockCategoriesList
          title="Categories from this author"
          categories={categories}
        />
        <BlockTagsList title="Tags from this author" tags={tags} />
      </LayoutColumn>
    </LayoutContainer>
  </PageContainer>
);

AuthorPage.getInitialProps = async ({ query }) => {
  const [
    { author },
    { posts },
    { tags, categories },
    blockSubscribe
  ] = await Promise.all<
    GetAuthorBySlugApiResponse,
    GetPostsByAuthorSlugApiResponse,
    GetTagsAndCategoriesByAuthorSlugApiResponse,
    any
  >([
    getAuthorBySlug(query.slug as string),
    getPostsByAuthorSlug(query.slug as string),
    getTagsAndCategoriesByAuthorSlug(query.slug as string),
    getBlockSubscribe()
  ]);

  return {
    author: author,
    posts: posts,
    tags: tags,
    categories: categories,
    blocks: {
      subscribe: blockSubscribe
    }
  };
};

export default AuthorPage;
