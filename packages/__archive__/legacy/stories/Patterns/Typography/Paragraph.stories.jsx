import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { Paragraph } from "../../../src/components/typography";

import { createStory } from "../../index";

storiesOf(createStory(base, filename), module)
  // .addParameters({
  //   notes
  // })
  .add("all sizes", () => (
    <>
      <Paragraph size="xl">Paragraph xl</Paragraph>
      <Paragraph size="lg">Paragraph lg</Paragraph>
      <Paragraph size="md">Paragraph md</Paragraph>
      <Paragraph size="sm">Paragraph sm</Paragraph>
      <Paragraph size="xs">Paragraph xs</Paragraph>
    </>
  ))
  .add("size - xl", () => <Paragraph size="xl">Paragraph xl</Paragraph>)
  .add("size - lg", () => <Paragraph size="lg">Paragraph lg</Paragraph>)
  .add("size - md", () => <Paragraph size="md">Paragraph md</Paragraph>)
  .add("size - sm", () => <Paragraph size="sm">Paragraph sm</Paragraph>)
  .add("using copy prop", () => <Paragraph size="xs">Paragraph xs</Paragraph>);
