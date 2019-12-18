import React from "react";

import { Input } from "./Input";

export default {
  component: Input,
  title: "Core|Forms/Input"
};

export const base = () => <Input name="default" />;
export const text = () => <Input name="text" type="text" />;
export const number = () => <Input name="number" type="number" />;
export const email = () => <Input name="email" type="email" />;
export const search = () => <Input name="search" type="search" />;
export const password = () => <Input name="password" type="password" />;
export const primaryWithPlaceholder = () => (
  <Input name="with-placeholder" placeholder="Text placeholder" />
);
export const primaryWithValue = () => (
  <Input name="with-value" value="Text value" />
);
export const primaryWithLabel = () => (
  <Input name="with-label" label="Text label" />
);
export const primaryWithLabelAndPlacenolder = () => (
  <Input
    name="with-label-and-placeholder"
    label="Text label and placeholder"
    placeholder="placeholder"
  />
);
export const primaryInvalidWithLabel = () => (
  <Input
    name="error-with-label"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
  />
);
export const primaryInvalidWithLabelAndErrorMessage = () => (
  <Input
    name="error-with-label-and-error-message"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
    errorMessage="Ohz noz! This isn't where I parked my car"
  />
);
export const secondary = () => <Input styleType="secondary" name="default" />;
export const secondaryWithPlaceholder = () => (
  <Input
    styleType="secondary"
    name="with-placeholder"
    placeholder="Text placeholder"
  />
);
export const secondaryWithValue = () => (
  <Input styleType="secondary" name="with-value" value="Text value" />
);
export const secondaryWithLabel = () => (
  <Input styleType="secondary" name="with-label" label="Text label" />
);
export const secondaryWithLabelAndPlacenolder = () => (
  <Input
    styleType="secondary"
    name="with-label-and-placeholder"
    label="Text label and placeholder"
    placeholder="placeholder"
  />
);
export const secondaryInvalidWithLabel = () => (
  <Input
    styleType="secondary"
    name="error-with-label"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
  />
);
export const secondaryInvalidWithLabelAndErrorMessage = () => (
  <Input
    styleType="secondary"
    name="error-with-label-and-error-message"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
    errorMessage="Ohz noz! This isn't where I parked my car"
  />
);
