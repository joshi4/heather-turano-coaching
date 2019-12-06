import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { createStory } from "../../index";
import { FormControl, Form, FormLayout } from "../../../src/components/forms";
import { FormField } from "../../../src/components/inputs";

storiesOf(createStory(base, filename), module)
  .add("default", () => (
    <FormControl initialValues={{ firstName: "", lastName: "", address: "" }}>
      <Form>
        <FormLayout>
          <FormField type="text" name="firstName" placeholder="First name" />
          <FormField type="text" name="lastName" placeholder="Last name" />
          <FormField type="text" name="address" placeholder="Address" />
        </FormLayout>
      </Form>
    </FormControl>
  ))
  .add("layout - stacked", () => (
    <FormControl initialValues={{ firstName: "", lastName: "", address: "" }}>
      <Form>
        <FormLayout styleType="stacked">
          <FormField type="text" name="firstName" placeholder="First name" />
          <FormField type="text" name="lastName" placeholder="Last name" />
          <FormField type="text" name="address" placeholder="Address" />
        </FormLayout>
      </Form>
    </FormControl>
  ))
  .add("layout - inline", () => (
    <FormControl initialValues={{ firstName: "", lastName: "", address: "" }}>
      <Form>
        <FormLayout styleType="inline">
          <FormField type="text" name="firstName" placeholder="First name" />
          <FormField type="text" name="lastName" placeholder="Last name" />
          <FormField type="text" name="address" placeholder="Address" />
        </FormLayout>
      </Form>
    </FormControl>
  ));
