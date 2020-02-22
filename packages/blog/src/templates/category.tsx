import React, { FC } from "react";
import { graphql } from "gatsby";
import { Tag, PostOrPage } from "@tryghost/content-api";

import {
  Layout,
  MetaData,
  PageContainer,
  LayoutContainer,
  LayoutColumn,
  PageHeader,
  BlogPostList
} from "../components";
import { BlockSubscribe, BlockContributors, BlockTagsList } from "../features";
import { destructureNodes, removeCategoriesFromTags } from "../utils";
import { uniqBy } from "lodash";

/**
 * Tag page (/tag/:slug)
 *
 * Loads all posts for the requested tag incl. pagination.
 *
 */
interface CategoryPageProps {
  data: {
    ghostTag: Tag;
    allGhostPost: {
      edges: {
        node: PostOrPage;
      }[];
    };
  };
  location: any;
  pageContext: any;
}

const CategoryPage: FC<CategoryPageProps> = ({ data, location }) => {
  const category = data.ghostTag;
  const posts = destructureNodes(data.allGhostPost.edges);

  const tags = posts
    .filter(post =>
      post.tags?.find(tag => {
        return tag.slug === category.slug;
      })
    )
    .flatMap(({ tags }) => tags);
  const tagsUnique = uniqBy(removeCategoriesFromTags(tags as Tag[]), "id");
  debugger;

  return (
    <>
      <MetaData data={data} location={location} type="series" />
      <Layout>
        <PageContainer>
          <LayoutContainer layoutType="stacked">
            <LayoutColumn>
              <PageHeader
                pageName="category"
                pageTitle={category.name ? category.name.split("-")[1] : ""}
              />
            </LayoutColumn>
          </LayoutContainer>
          <LayoutContainer>
            <LayoutColumn colWidth={700}>
              <BlogPostList posts={posts} />
            </LayoutColumn>
            <LayoutColumn>
              <BlockSubscribe displayBlockTitle={false} />
              <BlockContributors
                title="Authors of this category"
                posts={posts}
              />
              <BlockTagsList title="Tags in this category" tags={tagsUnique} />
            </LayoutColumn>
          </LayoutContainer>
        </PageContainer>
      </Layout>
    </>
  );
};

export default CategoryPage;

export const pageQuery = graphql`
  query GhostCategoryQuery($slug: String!) {
    # Tag Information
    ghostTag(slug: { eq: $slug }) {
      ...GhostTagFields
    }

    # Posts with Tag
    allGhostPost(
      sort: { order: DESC, fields: [published_at] }
      filter: { tags: { elemMatch: { slug: { eq: $slug } } } }
    ) {
      edges {
        node {
          ...GhostPostFields
        }
      }
    }
  }
`;
