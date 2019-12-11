import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { Button, ButtonGroup } from "../../../src/components/buttons";

import { createStory } from "../../index";

storiesOf(createStory(base, filename), module)
  .add("default", () => (
    <ButtonGroup>
      <Button styleType="primary" label="Submit" />
      <Button styleType="secondary" label="Cancel" />
    </ButtonGroup>
  ))
  .add("layout - inline", () => (
    <ButtonGroup layout="inline">
      <Button styleType="primary" label="Submit" />
      <Button styleType="secondary" label="Cancel" />
    </ButtonGroup>
  ))
  .add("layout - stacked", () => (
    <ButtonGroup layout="stacked">
      <Button styleType="primary" label="Submit" />
      <Button styleType="secondary" label="Cancel" />
    </ButtonGroup>
  ));
