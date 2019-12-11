import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { ButtonAction } from "../../../src/components/buttons";

import { createStory } from "../../index";

storiesOf(createStory(base, filename), module)
  .add("default", () => <ButtonAction label="This is an action button" />)
  .add("default w/ icon", () => (
    <ButtonAction label="This is an action button" icon="pencil" />
  ))
  .add("size - sm", () => (
    <ButtonAction label="This is an action button" size="sm" />
  ))
  .add("size - sm w/ icon", () => (
    <ButtonAction label="This is an action button" size="sm" icon="share" />
  ))
  .add("size - md", () => (
    <ButtonAction label="This is an action button" size="md" />
  ))
  .add("size - md w/ icon", () => (
    <ButtonAction label="This is an action button" size="md" icon="trash" />
  ));
