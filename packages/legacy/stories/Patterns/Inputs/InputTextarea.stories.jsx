import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";
import colors from "../../../src/styles/scss/exports/index.scss";

import { createStory } from "../../index";
import { InputTextarea } from "../../../src/components/inputs";

storiesOf(createStory(base, filename), module)
  .addParameters({
    backgrounds: [
      { name: "lightscale-2", value: colors.lightscale_1, defaut: true }
    ]
  })
  .add("default", () => <InputTextarea name="default" />)
  .add("primary - w/ placeholder", () => (
    <InputTextarea name="with-placeholder" placeholder="Textarea placeholder" />
  ))
  .add("primary - w/ value", () => (
    <InputTextarea name="with-value" value="Textarea value" />
  ))
  .add("primary - w/ label", () => (
    <InputTextarea name="with-label" label="Textarea label" />
  ))
  .add("primary - w/ label & placeholder", () => (
    <InputTextarea
      name="with-label-and-placeholder"
      label="Textarea label and placeholder"
      placeholder="placeholder"
    />
  ))
  .add("primary - invalid w/ label", () => (
    <InputTextarea
      name="invalid-with-label"
      label="Invalid textarea"
      placeholder="placeholder"
      isValid={false}
    />
  ))
  .add("primary - invalid w/ label & error message", () => (
    <InputTextarea
      name="invalid-with-label-and-error-message"
      label="Invalid textarea"
      placeholder="placeholder"
      isValid={false}
      errorMessage="Ohz noz! This isn't where I parked my car"
    />
  ))
  .addParameters({
    backgrounds: [
      { name: "lightscale-2", value: colors.lightscale_1, defaut: true }
    ]
  })
  .add("secondary - w/ placeholder", () => (
    <InputTextarea
      styleType="secondary"
      name="with-placeholder"
      placeholder="Textarea placeholder"
    />
  ))
  .add("secondary - w/ value", () => (
    <InputTextarea
      styleType="secondary"
      name="with-value"
      value="Textarea value"
    />
  ))
  .add("secondary - w/ label", () => (
    <InputTextarea
      styleType="secondary"
      name="with-label"
      label="Textarea label"
    />
  ))
  .add("secondary - w/ label & placeholder", () => (
    <InputTextarea
      styleType="secondary"
      name="with-label-and-placeholder"
      label="Textarea label and placeholder"
      placeholder="placeholder"
    />
  ))
  .add("secondary - invalid w/ label", () => (
    <InputTextarea
      styleType="secondary"
      name="invalid-with-label"
      label="Invalid textarea"
      placeholder="placeholder"
      isValid={false}
    />
  ))
  .add("secondary - invalid w/ label & error message", () => (
    <InputTextarea
      styleType="secondary"
      name="invalid-with-label-and-error-message"
      label="Invalid textarea"
      placeholder="placeholder"
      isValid={false}
      errorMessage="Ohz noz! It's invalid, yo!"
    />
  ));
