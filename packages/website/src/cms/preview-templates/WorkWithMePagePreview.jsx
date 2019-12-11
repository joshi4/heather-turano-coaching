import React from "react";
import PropTypes from "prop-types";
import { WorkWithMePageTemplate } from "../../templates/work-with-me/work-with-me.template";

const WorkWithMePagePreview = ({ entry, getAsset, widgetFor }) => {
  const pillars = entry.getIn(["data", "pillars", "pillarList"]);
  const pillarList = pillars ? pillars.toJS() : [];

  const body = widgetFor("body");

  return (
    <WorkWithMePageTemplate
      main={{
        title: entry.getIn(["data", "main", "title"]),
        body: entry.getIn(["data", "main", "body"]),
        coachingSignup: {
          firstNamePlaceholder: entry.getIn([
            "data",
            "main",
            "coachingSignup",
            "firstNamePlaceholder"
          ]),
          emailAddressPlaceholder: entry.getIn([
            "data",
            "main",
            "coachingSignup",
            "emailAddressPlaceholder"
          ]),
          submitLabel: entry.getIn([
            "data",
            "main",
            "coachingSignup",
            "submitLabel"
          ])
        }
      }}
      pillars={{
        title: entry.getIn(["data", "pillars", "title"]),
        description: entry.getIn(["data", "pillars", "description"]),
        pillarList
      }}
      approach={{
        title: entry.getIn(["data", "approach", "title"]),
        image: getAsset(entry.getIn(["data", "approach", "image"])),
        prompt: entry.getIn(["data", "approach", "prompt"]),
        coachingSignup: {
          firstNamePlaceholder: entry.getIn([
            "data",
            "approach",
            "coachingSignup",
            "firstNamePlaceholder"
          ]),
          emailAddressPlaceholder: entry.getIn([
            "data",
            "approach",
            "coachingSignup",
            "emailAddressPlaceholder"
          ]),
          submitLabel: entry.getIn([
            "data",
            "approach",
            "coachingSignup",
            "submitLabel"
          ])
        }
      }}
      content={body}
    />
  );
};

WorkWithMePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }).isRequired,
  getAsset: PropTypes.func.isRequired,
  widgetFor: PropTypes.func.isRequired
};

export default WorkWithMePagePreview;
