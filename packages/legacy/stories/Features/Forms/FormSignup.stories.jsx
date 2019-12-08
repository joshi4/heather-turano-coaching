import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { createStory } from "../../index";
import { FormSignup } from "../../../src/components-app/forms";

const handleSubmit = values => alert(JSON.stringify(values));

storiesOf(createStory(base, filename), module)
  .add("default", () => (
    <FormSignup actionLabel="lets do this!" handleSubmit={handleSubmit} />
  ))
  .add("stacked", () => (
    <FormSignup
      layout="stacked"
      actionLabel="lets do this!"
      handleSubmit={handleSubmit}
    />
  ))
  .add("stacked - w/ first name", () => (
    <FormSignup
      shouldDisplayFirstName
      layout="stacked"
      actionLabel="lets do this!"
      handleSubmit={handleSubmit}
    />
  ))
  .add("stacked - w/ placeholders", () => (
    <FormSignup
      shouldDisplayFirstName
      layout="stacked"
      actionLabel="lets do this!"
      handleSubmit={handleSubmit}
      placeholder={{
        firstName: "this is what people call you",
        email: "youremail@bomb.com"
      }}
    />
  ))
  .add("inline", () => (
    <FormSignup
      layout="inline"
      actionLabel="lets do this!"
      handleSubmit={handleSubmit}
    />
  ))
  .add("inline - w/ first name", () => (
    <FormSignup
      shouldDisplayFirstName
      layout="inline"
      actionLabel="lets do this!"
      handleSubmit={handleSubmit}
    />
  ))
  .add("inline - w/ placeholders", () => (
    <FormSignup
      shouldDisplayFirstName
      layout="inline"
      actionLabel="lets do this!"
      handleSubmit={handleSubmit}
      placeholder={{
        firstName: "this is what people call you",
        email: "youremail@bomb.com"
      }}
    />
  ));
