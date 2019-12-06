import React from "react";
import { storiesOf } from "@storybook/react";
import base, { filename } from "paths.macro";

import { Button } from "../../../src/components/buttons";

import { createStory } from "../../index";

storiesOf(createStory(base, filename), module)
  .add("primary", () => <Button label="Primary" />)
  .add("primary - disabled", () => (
    <Button label="Primary - disabled" disabled />
  ))
  .add("primary - loading", () => <Button label="Primary - loading" loading />)
  .add("secondary", () => <Button styleType="secondary" label="secondary" />)
  .add("secondary - disabled", () => (
    <Button styleType="secondary" label="secondary - disabled" disabled />
  ))
  .add("secondary - loading", () => (
    <Button styleType="secondary" label="secondary - loading" loading />
  ))
  .add("destructive", () => (
    <Button styleType="destructive" label="destructive" />
  ))
  .add("destructive - disabled", () => (
    <Button styleType="destructive" label="destructive - disabled" disabled />
  ))
  .add("destructive - loading", () => (
    <Button styleType="destructive" label="destructive - loading" loading />
  ));
