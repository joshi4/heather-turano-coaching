import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { Label } from "../../../src/components/typography";

import { createStory } from "../../index";

storiesOf(createStory(base, filename), module)
  .add("all sizes", () => (
    <>
      <Label size="xl">Label xl</Label>
      <Label size="lg">Label lg</Label>
      <Label size="md">Label md</Label>
      <Label size="sm">Label sm</Label>
      <Label size="xs">Label xs</Label>
    </>
  ))
  .add("size - xl", () => <Label size="xl">Label xl</Label>)
  .add("size - lg", () => <Label size="lg">Label lg</Label>)
  .add("size - md", () => <Label size="md">Label md</Label>)
  .add("size - sm", () => <Label size="sm">Label sm</Label>)
  .add("using copy prop", () => <Label size="xs">Label xs</Label>)
  .add("color - invalid", () => (
    <>
      <Label size="xl" color="invalid-0">
        Label xl
      </Label>
      <Label size="lg" color="invalid-0">
        Label lg
      </Label>
      <Label size="md" color="invalid-0">
        Label md
      </Label>
      <Label size="sm" color="invalid-0">
        Label sm
      </Label>
      <Label size="xs" color="invalid-0">
        Label xs
      </Label>
    </>
  ));
