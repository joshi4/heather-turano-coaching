import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { Text } from "../../../src/components/typography";

import { createStory } from "../../index";

storiesOf(createStory(base, filename), module)
  // .addParameters({
  //   notes
  // })
  .add("all sizes", () => (
    <>
      <Text size="xl">Text xl</Text>
      <Text size="lg">Text lg</Text>
      <Text size="md">Text md</Text>
      <Text size="sm">Text sm</Text>
      <Text size="xs">Text xs</Text>
    </>
  ))
  .add("size - xl", () => <Text size="xl">Text xl</Text>)
  .add("size - lg", () => <Text size="lg">Text lg</Text>)
  .add("size - md", () => <Text size="md">Text md</Text>)
  .add("size - sm", () => <Text size="sm">Text sm</Text>)
  .add("using copy prop", () => <Text size="xs">Text xs</Text>);
