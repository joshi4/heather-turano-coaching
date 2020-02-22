import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { Title } from "../../../src/components/typography";

import { createStory } from "../../index";

storiesOf(createStory(base, filename), module)
  .add("size - lg", () => <Title size="lg">Lorem ipsum</Title>)
  .add("size - md", () => <Title size="md">lorem ipsum</Title>)
  .add("size - sm", () => <Title size="sm">lorem ipsum</Title>);
