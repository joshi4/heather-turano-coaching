import React from "react";
// import { graphql } from "gatsby";

import { PageContainer, MetaData, Layout } from "../components";

import {
  Hero,
  Section,
  Heading,
  Title
} from "@heather-turano-coaching/components";

const dandilion = require("../assets/images/dandilion.jpg");

/**
 * Main index page (home page)
 *
 * Loads all posts from Ghost and uses pagination to navigate through them.
 * The number of posts that should appear per page can be setup
 * in /utils/siteConfig.js under `postsPerPage`.
 *
 */
// @ts-ignore
const Index = ({ data, location, pageContext }) => (
  <>
    <Layout pageTitle="Blog">
      <MetaData location={location} />
      <PageContainer>
        <Hero
          image={dandilion}
          alt="versailles-dandilion"
          borderColor={{ fixed: "light" }}
          gradient={{ scalable: { color: "secondary" } }}
        >
          <Section styleType="hero">
            <Heading fontSize="h1" fontColor={{ fixed: "light" }}>
              <div>Live Life</div>
              <div>Mindful</div>
            </Heading>
          </Section>
        </Hero>
        <Section styleType="blank">
          <div>
            <Title size="lg">Heading 1</Title>
          </div>
        </Section>
        <Section styleType="layered">
          <div>
            <Title size="lg">Heading 2</Title>
          </div>
        </Section>
        <Section styleType="blank">
          <div>
            <Title size="lg">Heading 3</Title>
            <div>&nbsp;</div>
          </div>
        </Section>
      </PageContainer>
    </Layout>
  </>
);

export default Index;

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
// export const pageQuery = graphql`
//   query GhostPostQuery($limit: Int!, $skip: Int!) {
//     allGhostPost(
//       sort: { order: DESC, fields: [published_at] }
//       limit: $limit
//       skip: $skip
//     ) {
//       edges {
//         node {
//           ...GhostPostFields
//         }
//       }
//     }
//   }
// `;
