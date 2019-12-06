import React from "react";
import PropTypes from "prop-types";
import { HomePageTemplate } from "../../templates/home/home.template";

const HomePagePreview = ({ entry, getAsset }) => {
  const testis = entry.getIn(["data", "testimonials", "testimonialEntries"]);
  const testimonialEntries = testis ? testis.toJS() : [];

  const methods = entry.getIn(["data", "method", "methodSteps"]);
  const methodSteps = methods ? methods.toJS() : [];

  return (
    <HomePageTemplate
      hero={{
        heroImage: getAsset(entry.getIn(["data", "hero", "heroImage"])),
        heroTitle: entry.getIn(["data", "hero", "heroTitle"]),
        heroSubTitle: entry.getIn(["data", "hero", "heroSubTitle"]),
        heroCta: {
          label: entry.getIn(["data", "hero", "heroCta", "label"]),
          actionRoute: entry.getIn(["data", "hero", "heroCta", "actionRoute"])
        }
      }}
      emailSignup={{
        title: entry.getIn(["data", "emailSignup", "title"]),
        body: entry.getIn(["data", "emailSignup", "body"]),
        form: {
          firstNamePlaceholder: entry.getIn([
            "data",
            "emailSignup",
            "form",
            "firstNamePlaceholder"
          ]),
          emailAddressPlaceholder: entry.getIn([
            "data",
            "emailSignup",
            "form",
            "emailAddressPlaceholder"
          ]),
          submitLabel: entry.getIn([
            "data",
            "emailSignup",
            "form",
            "submitLabel"
          ])
        }
      }}
      testimonials={{
        testimonialTitle: entry.getIn([
          "data",
          "testimonials",
          "testimonialTitle"
        ]),
        testimonialEntries
      }}
      method={{
        methodTitle: entry.getIn(["data", "method", "methodTitle"]),
        methodSteps
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
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired,
  getAsset: PropTypes.func.isRequired
};

export default HomePagePreview;
