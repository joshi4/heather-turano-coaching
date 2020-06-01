import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";

import { Layout } from "../../components-gatsby";
import { ContactPageTemplate } from "./contact.template";

export const pageQuery = graphql`
  query ContactPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        form {
          title
          description
          fields {
            firstName {
              label
              placeholder
            }
            lastName {
              label
              placeholder
            }
            emailAddress {
              label
              placeholder
            }
            natureOfContact {
              label
              placeholder
            }
            submit {
              label
            }
          }
        }
        general {
          title
          description
          emailAddress {
            label
            emailLink
          }
        }
      }
    }
  }
`;

const ContactPage = ({
  data: {
    markdownRemark: {
      frontmatter: { form, general }
    }
  }
}) => (
  <Layout>
    <Helmet
      title="Contact | Heather Turano Coaching"
      bodyAttributes={{ class: "" }}
    />
    <ContactPageTemplate form={form} general={general} />
  </Layout>
);

ContactPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default ContactPage;
