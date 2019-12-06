import React from "react";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import { Text, Markdown } from "../../components/typography";
import { Carosel, Stepper } from "../../components/navigation";

import { Section } from "../../components-app/layouts";
import { Hero } from "../../components-app/headers";
import { Testimonial } from "../../components-app/custom";
import { FormSignup } from "../../components-app/forms";
import { FormContainer } from "../../components/forms";
import { Button } from "../../components/buttons";

export const HomePageTemplate = ({
  hero: {
    heroImage,
    heroTitle,
    heroSubTitle,
    heroCta: { label: heroCtaLabel, actionRoute: heroActionRoute }
  },
  emailSignup: { title, body, form },
  testimonials: { testimonialTitle, testimonialEntries },
  method: { methodTitle, methodSteps },
  coachingSignup: {
    title: coachingTitle,
    body: coachingBody,
    form: coachingForm
  }
}) => (
  <>
    <Hero
      img={heroImage}
      alt="hero image"
      title={heroTitle}
      subTitle={heroSubTitle}
    >
      <Button
        styleType="secondary"
        label={heroCtaLabel}
        onClick={() => navigate(`/${heroActionRoute}`)}
      />
    </Hero>
    <Section title={title}>
      {body && <Markdown content={body} />}
      <FormContainer>
        <FormSignup
          name="home"
          layout="stacked"
          shouldDisplayFirstName
          actionLabel={form.submitLabel}
          placeholder={{
            firstName: form.firstNamePlaceholder,
            email: form.emailAddressPlaceholder
          }}
        />
      </FormContainer>
    </Section>
    <Section title={testimonialTitle} styleType="alt">
      <Carosel entries={testimonialEntries}>
        {({ clientImage, clientType, clientLocation, clientQuote }) => (
          <Testimonial
            image={clientImage}
            type={clientType}
            location={clientLocation}
            quote={clientQuote}
          />
        )}
      </Carosel>
    </Section>
    <Section title={methodTitle}>
      <Stepper steps={methodSteps}>
        {({ description }) => <Text size="lg" copy={description} />}
      </Stepper>
    </Section>
    <Section
      title={coachingTitle}
      styleType="secondary"
      contentOrientation="center"
    >
      {coachingBody && <Markdown content={coachingBody} />}
      <FormContainer styleType="standalone">
        <FormSignup
          name="home-2"
          layout="inline"
          actionLabel={coachingForm.submitLabel}
          shouldDisplayFirstName
          placeholder={{
            firstName: coachingForm.firstNamePlaceholder,
            email: coachingForm.emailAddressPlaceholder
          }}
        />
      </FormContainer>
    </Section>
  </>
);

HomePageTemplate.propTypes = {
  hero: PropTypes.object.isRequired,
  emailSignup: PropTypes.object.isRequired,
  testimonials: PropTypes.object.isRequired,
  method: PropTypes.object.isRequired,
  coachingSignup: PropTypes.object.isRequired
};
