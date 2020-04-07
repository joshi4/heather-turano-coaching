import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";
import colors from "../../../src/styles/scss/exports/index.scss";

import { createStory } from "../../index";
import { InputText } from "../../../src/components/inputs";

storiesOf(createStory(base, filename), module)
  .addParameters({
    backgrounds: [
      { name: "lightscale-2", value: colors.lightscale_1, defaut: true }
    ]
  })
  .add("default", () => <InputText name="default" />)
  .add("primary - w/ placeholder", () => (
    <InputText name="with-placeholder" placeholder="Input with placeholder" />
  ))
  .add("primary - w/ value", () => (
    <InputText name="with-value" value="Input with value" />
  ))
  .add("primary - w/ label", () => (
    <InputText name="with-label" label="Input with label" />
  ))
  .add("primary - w/ label & placeholder", () => (
    <InputText
      name="with-label-and-placeholder"
      label="Input with label and placeholder"
      placeholder="placeholder"
    />
  ))
  .add("primary - invalid w/ label", () => (
    <InputText
      name="invalid-with-label"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
    />
  ))
  .add("primary - invalid w/ label & error message", () => (
    <InputText
      name="invalid-with-label-and-error-message"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
      errorMessage="Ohz noz! This is an invalid input"
    />
  ))
  .addParameters({
    backgrounds: [
      { name: "lightscale-2", value: colors.lightscale_1, defaut: true }
    ]
  })
  .add("secondary - w/ placeholder", () => (
    <InputText
      styleType="secondary"
      name="with-placeholder"
      placeholder="Input with placeholder"
    />
  ))
  .add("secondary - w/ value", () => (
    <InputText
      styleType="secondary"
      name="with-value"
      value="Input with value"
    />
  ))
  .add("secondary - w/ label", () => (
    <InputText
      styleType="secondary"
      name="with-label"
      label="Input with label"
    />
  ))
  .add("secondary - w/ label & placeholder", () => (
    <InputText
      styleType="secondary"
      name="with-label-and-placeholder"
      label="Input with label and placeholder"
      placeholder="placeholder"
    />
  ))
  .add("secondary - invalid w/ label", () => (
    <InputText
      styleType="secondary"
      name="invalid-with-label"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
    />
  ))
  .add("secondary - invalid w/ label & error message", () => (
    <InputText
      styleType="secondary"
      name="invalid-with-label-and-error-message"
      label="This input is invalid"
      placeholder="placeholder"
      isValid={false}
      errorMessage="Ohz noz! This is an invalid input"
    />
  ))
  .add("type - text - primary", () => (
    <InputText name="text" label="text" placeholder="cool placeholder" />
  ))
  .add("type - text - secondary", () => (
    <InputText
      name="text"
      label="text"
      placeholder="cool placeholder"
      styleType="secondary"
    />
  ))
  .add("type - email - primary", () => (
    <InputText
      name="email"
      type="email"
      label="Email"
      placeholder="emailaddress@gmail.com"
      value="mycoolemail@gmail.com"
    />
  ))
  .add("type - email - secondary", () => (
    <InputText
      name="email"
      type="email"
      label="Email"
      placeholder="emailaddress@gmail.com"
      styleType="secondary"
      value="mycoolemail@gmail.com"
    />
  ))
  .add("type - password - primary", () => (
    <InputText
      name="password"
      type="password"
      label="Password"
      value="supersecretstuff2019"
    />
  ))
  .add("type - password - secondary", () => (
    <InputText
      name="password"
      type="password"
      label="Password"
      styleType="secondary"
      value="supersecretstuff2019"
    />
  ))
  .add("type - search - primary", () => (
    <InputText name="search" type="search" label="search" value="Nabisco" />
  ))
  .add("type - search - secondary", () => (
    <InputText
      name="search"
      type="search"
      label="search"
      styleType="secondary"
      value="Nabisco"
    />
  ));
