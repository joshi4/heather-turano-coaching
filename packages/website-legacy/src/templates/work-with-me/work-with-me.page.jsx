import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout, HTMLContent } from "../../components-gatsby";
import { WorkWithMePageTemplate } from "./work-with-me.template";

export const query = graphql`
  query WorkWithMePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        main {
          title
          body
          coachingSignup {
            firstNamePlaceholder
            emailAddressPlaceholder
            submitLabel
          }
        }
        pillars {
          title
          description
          pillarList {
            title
            icon
            blurb
          }
        }
        approach {
          title
          image
          prompt
          coachingSignup {
            firstNamePlaceholder
            emailAddressPlaceholder
            submitLabel
          }
        }
      }
    }
  }
`;

const Services = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { main, pillars, approach }
    }
  }
}) => (
  <Layout>
    <Helmet
      title="Services | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <WorkWithMePageTemplate
      content={html}
      contentComponent={HTMLContent}
      main={main}
      pillars={pillars}
      approach={approach}
    />
  </Layout>
);

Services.propTypes = {
  data: PropTypes.object.isRequired
};

export default Services;
