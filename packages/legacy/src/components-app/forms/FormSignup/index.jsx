import React from "react";
import PropTypes from "prop-types";

import {
  FormControl,
  FormLayout,
  FormNetlify
} from "../../../components/forms";
import { FormField } from "../../../components/inputs";
import { Button } from "../../../components/buttons";

const FormSignup = ({
  name,
  shouldDisplayFirstName,
  shouldDisplayLabels,
  actionLabel,
  layout,
  placeholder: { firstName: placeholderFirstName, email: placeholderEmail }
}) => (
  <FormControl
    initialValues={
      shouldDisplayFirstName ? { firstName: "", email: "" } : { email: "" }
    }
  >
    {() => (
      <FormNetlify name={`sign-up-${name}`} action="/sign-up-success">
        <FormLayout styleType={layout}>
          {shouldDisplayFirstName && (
            <FormField
              type="text"
              name="firstName"
              label={
                layout !== "inline" && shouldDisplayLabels ? "First name" : null
              }
              placeholder={placeholderFirstName}
            />
          )}
          <FormField
            type="email"
            name="email"
            label={layout !== "inline" && shouldDisplayLabels ? "Email" : null}
            placeholder={placeholderEmail}
          />
          <Button styleType="secondary" label={actionLabel} htmlType="submit" />
        </FormLayout>
      </FormNetlify>
    )}
  </FormControl>
);

FormSignup.propTypes = {
  name: PropTypes.string.isRequired,
  shouldDisplayFirstName: PropTypes.bool,
  shouldDisplayLabels: PropTypes.bool,
  actionLabel: PropTypes.string.isRequired,
  placeholder: PropTypes.shape({
    firstName: PropTypes.string,
    email: PropTypes.string
  }),
  layout: PropTypes.oneOf(["stacked", "inline"])
};

FormSignup.defaultProps = {
  shouldDisplayFirstName: false,
  shouldDisplayLabels: false,
  placeholder: {
    firstName: "First name",
    email: "email@bomb.com"
  },
  layout: "stacked"
};

export default FormSignup;
