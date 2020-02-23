import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about/about.template";

const AboutPagePreview = ({ entry, getAsset }) => (
  <AboutPageTemplate
    main={{
      title: entry.getIn(["data", "main", "title"]),
      body: entry.getIn(["data", "main", "body"]),
      backgroundImage: {
        imgLocation: getAsset(
          entry.getIn(["data", "main", "backgroundImage", "imgLocation"])
        ),
        imgAlt: entry.getIn(["data", "main", "backgroundImage", "imgAlt"]),
        imgHeight: entry.getIn(["data", "main", "backgroundImage", "imgHeight"])
      }
    }}
    sectionOne={{
      title: entry.getIn(["data", "sectionOne", "title"]),
      body: entry.getIn(["data", "sectionOne", "body"])
    }}
    sectionTwo={{
      title: entry.getIn(["data", "sectionTwo", "title"]),
      body: entry.getIn(["data", "sectionTwo", "body"]),
      avatar: getAsset(entry.getIn(["data", "sectionTwo", "avatar"]))
    }}
    coachingSignup={{
      title: entry.getIn(["data", "coachingSignup", "title"]),
      body: entry.getIn(["data", "coachingSignup", "body"]),
      form: {
        firstNamePlaceholder: entry.getIn([
          "data",
          "coachingSignup",
          "form",
          "firstNamePlaceholder"
        ]),
        emailAddressPlaceholder: entry.getIn([
          "data",
          "coachingSignup",
          "form",
          "emailAddressPlaceholder"
        ]),
        submitLabel: entry.getIn([
          "data",
          "coachingSignup",
          "form",
          "submitLabel"
        ])
      },
      prompt: entry.getIn(["data", "coachingSignup", "prompt"])
    }}
  />
);

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired,
  getAsset: PropTypes.func.isRequired
};

export default AboutPagePreview;
