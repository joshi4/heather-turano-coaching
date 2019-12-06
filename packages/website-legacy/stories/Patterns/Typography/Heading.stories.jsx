import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

// component
import { Heading } from "../../../src/components/typography";

import { createStory } from "../../index";
// import notes from "./readme.md";

storiesOf(createStory(base, filename), module)
  // .addParameters({
  //   notes
  // })
  .add("all sizes", () => (
    <>
      <Heading>Heading default - H1</Heading>
      <Heading size="xl">Heading XL - H1</Heading>
      <Heading size="lg">Heading LG - H2</Heading>
      <Heading size="md">Heading MD - H3</Heading>
      <Heading size="sm">Heading SM - H4</Heading>
    </>
  ))
  .add("size - default (h1)", () => <Heading>Heading default - H1</Heading>)
  .add("size - xl (h1)", () => <Heading size="xl">Heading XL - H1</Heading>)
  .add("size - lg (h2)", () => <Heading size="lg">Heading LG - H2</Heading>)
  .add("size - md (h3)", () => <Heading size="md">Heading MD - H3</Heading>)
  .add("size - sm (h4)", () => <Heading size="sm">Heading SM - H4</Heading>)
  .add("using copy prop", () => <Heading size="sm" copy="Heading SM - H4" />)
  .add("color - secondary", () => (
    <Heading color="secondary-0">Heading default - H1</Heading>
  ));
