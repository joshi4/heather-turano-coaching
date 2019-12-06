import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { Icon } from "../../../src/components/typography";

import { createStory } from "../../index";

storiesOf(createStory(base, filename), module)
  .add("all sizes", () => (
    <>
      <Icon icon="rocket" size="hxl" />
      <Icon icon="rocket" size="hlg" />
      <Icon icon="rocket" size="hmd" />
      <Icon icon="rocket" size="hsm" />
      <Icon icon="rocket" size="xl" />
      <Icon icon="rocket" size="lg" />
      <Icon icon="rocket" size="md" />
      <Icon icon="rocket" size="sm" />
      <Icon icon="rocket" size="xs" />
    </>
  ))
  .add("size - xl", () => <Icon icon="rocket" size="xl" />)
  .add("size - lg", () => <Icon icon="rocket" size="lg" />)
  .add("size - md", () => <Icon icon="rocket" size="md" />)
  .add("size - sm", () => <Icon icon="rocket" size="sm" />)
  .add("size - xs", () => <Icon icon="rocket" size="xs" />);
