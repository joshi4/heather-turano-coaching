import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { Caption } from "../../../src/components/typography";

import { createStory } from "../../index";
// import notes from "./readme.md";

storiesOf(createStory(base, filename), module)
  // .addParameters({
  //   notes
  // })
  .add("all sizes", () => (
    <>
      <Caption size="xl">Caption xl</Caption>
      <Caption size="lg">Caption lg</Caption>
      <Caption size="md">Caption md</Caption>
      <Caption size="sm">Caption sm</Caption>
      <Caption size="xs">Caption xs</Caption>
    </>
  ))
  .add("size - xl", () => <Caption size="xl">Caption xl</Caption>)
  .add("size - lg", () => <Caption size="lg">Caption lg</Caption>)
  .add("size - md", () => <Caption size="md">Caption md</Caption>)
  .add("size - sm", () => <Caption size="sm">Caption sm</Caption>)
  .add("using copy prop", () => <Caption size="xs">Caption xs</Caption>)
  .add("color - invalid", () => (
    <>
      <Caption size="xl" color="invalid-0">
        Caption xl
      </Caption>
      <Caption size="lg" color="invalid-0">
        Caption lg
      </Caption>
      <Caption size="md" color="invalid-0">
        Caption md
      </Caption>
      <Caption size="sm" color="invalid-0">
        Caption sm
      </Caption>
      <Caption size="xs" color="invalid-0">
        Caption xs
      </Caption>
    </>
  ));
