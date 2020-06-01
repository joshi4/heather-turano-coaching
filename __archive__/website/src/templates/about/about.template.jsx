import React from "react";
import PropTypes from "prop-types";

import { Markdown } from "../../components/typography";

import { BackgroundImage } from "../../components-app/background-images";
import { Avatar } from "../../components-app/images";
import { Section, SectionItem } from "../../components-app/layouts";
import { FormSignup } from "../../components-app/forms";
import { FormContainer } from "../../components/forms";

export const AboutPageTemplate = ({
  main: {
    title: mainTitle,
    body: mainBody,
    backgroundImage: { imgLocation, imgAlt, imgHeight }
  },
  sectionOne,
  sectionTwo,
  coachingSignup: {
    title: coachingTitle,
    body: coachingBody,
    prompt: coachingPrompt,
    form: coachingForm
  }
}) => (
  <>
    <BackgroundImage image={imgLocation} alt={imgAlt} height={imgHeight} fadeUp>
      <Section title={mainTitle} styleType="transparent">
        <Markdown content={mainBody} />
      </Section>
    </BackgroundImage>
    <Section title={sectionOne.title}>
      <Markdown content={sectionOne.body} />
    </Section>
    <Section title={sectionTwo.title} styleType="alt">
      <SectionItem>
        <Avatar image={sectionTwo.avatar} alt="heather avatar" size="lg" />
      </SectionItem>
      <SectionItem>
        <Markdown content={sectionTwo.body} />
      </SectionItem>
    </Section>
    <Section title={coachingTitle} contentOrientation="center">
      <Markdown content={coachingBody} />
      <FormContainer styleType="standalone">
        <FormSignup
          name="about"
          layout="inline"
          actionLabel={coachingForm.submitLabel}
          shouldDisplayFirstName
          placeholder={{
            firstName: coachingForm.firstNamePlaceholder,
            email: coachingForm.emailAddressPlaceholder
          }}
        />
      </FormContainer>
      {coachingPrompt && <Markdown content={coachingPrompt} />}
    </Section>
  </>
);

AboutPageTemplate.propTypes = {
  main: PropTypes.object.isRequired,
  sectionOne: PropTypes.object.isRequired,
  sectionTwo: PropTypes.object.isRequired,
  coachingSignup: PropTypes.object.isRequired
};
