import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../templates/contact/contact.template";

const ContactPagePreview = ({ entry }) => (
  <ContactPageTemplate
    form={{
      title: entry.getIn(["data", "form", "title"]),
      description: entry.getIn(["data", "form", "description"]),
      fields: {
        firstName: {
          label: entry.getIn(["data", "form", "fields", "firstName", "label"]),
          placeholder: entry.getIn([
            "data",
            "form",
            "fields",
            "firstName",
            "placeholder"
          ])
        },
        lastName: {
          label: entry.getIn(["data", "form", "fields", "lastName", "label"]),
          placeholder: entry.getIn([
            "data",
            "form",
            "fields",
            "lastName",
            "placeholder"
          ])
        },
        emailAddress: {
          label: entry.getIn([
            "data",
            "form",
            "fields",
            "emailAddress",
            "label"
          ]),
          placeholder: entry.getIn([
            "data",
            "form",
            "fields",
            "emailAddress",
            "placeholder"
          ])
        },
        natureOfContact: {
          label: entry.getIn([
            "data",
            "form",
            "fields",
            "natureOfContact",
            "label"
          ]),
          placeholder: entry.getIn([
            "data",
            "form",
            "fields",
            "natureOfContact",
            "placeholder"
          ])
        },
        submit: {
          label: entry.getIn(["data", "form", "fields", "submit", "label"])
        }
      }
    }}
    general={{
      title: entry.getIn(["data", "general", "title"]),
      description: entry.getIn(["data", "general", "description"]),
      emailAddress: {
        label: entry.getIn(["data", "general", "emailAddress", "label"]),
        emailLink: entry.getIn(["data", "general", "emailAddress", "emailLink"])
      }
    }}
  />
);

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired
};

export default ContactPagePreview;
