import React from "react";
import PropTypes from "prop-types";

import { Section, SectionItem } from "../../components-app/layouts";

import {
  FormControl,
  FormLayout,
  FormContainer,
  FormNetlify
} from "../../components/forms";
import { FormField, InputCaptcha } from "../../components/inputs";
import { Button } from "../../components/buttons";
import { Text, Color, Markdown } from "../../components/typography";

export const ContactPageTemplate = ({
  form: {
    title: formTitle,
    description: formDescription,
    fields: { firstName, lastName, emailAddress, natureOfContact, submit }
  },
  general: {
    title: generalTitle,
    description: generalDescription,
    emailAddress: generalEmailAddress
  }
}) => (
  <>
    <Section title={formTitle}>
      <Markdown content={formDescription} />
      <FormContainer styleType="standalone">
        <FormControl
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            message: ""
          }}
        >
          {() => (
            <FormNetlify name="contact" includeCaptcha>
              <FormLayout styleType="stacked">
                <FormField
                  type="text"
                  name="firstName"
                  label={firstName.label}
                  placeholder={firstName.placeholder}
                />
                <FormField
                  type="text"
                  name="lastName"
                  label={lastName.label}
                  placeholder={lastName.placeholder}
                />
                <FormField
                  type="email"
                  name="email"
                  label={emailAddress.label}
                  placeholder={emailAddress.placeholder}
                />
                <FormField
                  type="textarea"
                  name="message"
                  label={natureOfContact.label}
                  placeholder={natureOfContact.placeholder}
                />
                <InputCaptcha />
                <Button
                  styleType="secondary"
                  label={submit.label}
                  htmlType="submit"
                />
              </FormLayout>
            </FormNetlify>
          )}
        </FormControl>
      </FormContainer>
    </Section>
    <Section title={generalTitle} styleType="alt">
      <SectionItem>
        <Text size="lg">
          <span>
            {generalDescription}
            <a
              href={`mailto:${generalEmailAddress.emailLink}`}
              style={{ display: "inline-block" }}
            >
              <Color color="accent-0">{generalEmailAddress.label}</Color>
            </a>
          </span>
        </Text>
      </SectionItem>
    </Section>
  </>
);

ContactPageTemplate.propTypes = {
  form: PropTypes.object.isRequired,
  general: PropTypes.object.isRequired
};
