import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components-gatsby";
import { HomePageTemplate } from "./home.template";

export const pageQuery = graphql`
  query HomePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        hero {
          heroImage
          heroTitle
          heroSubTitle
          heroCta {
            label
            actionRoute
          }
        }
        emailSignup {
          title
          body
          form {
            firstNamePlaceholder
            emailAddressPlaceholder
            submitLabel
          }
        }
        testimonials {
          testimonialTitle
          testimonialEntries {
            clientImage
            clientType
            clientLocation
            clientQuote
          }
        }
        method {
          methodTitle
          methodSteps {
            description
            icon
            label
          }
        }
        coachingSignup {
          title
          body
          prompt
          form {
            firstNamePlaceholder
            emailAddressPlaceholder
            submitLabel
          }
        }
      }
    }
  }
`;

const Home = ({
  data: {
    markdownRemark: {
      frontmatter: { hero, emailSignup, testimonials, method, coachingSignup }
    }
  }
}) => (
  <Layout>
    <Helmet
      title="Home | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <HomePageTemplate
      hero={hero}
      emailSignup={emailSignup}
      testimonials={testimonials}
      method={method}
      coachingSignup={coachingSignup}
    />
  </Layout>
);

Home.propTypes = {
  data: PropTypes.object.isRequired
};

export default Home;
