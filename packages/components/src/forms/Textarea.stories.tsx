import React from "react";

import { Textarea } from "./Textarea";

export default {
  component: Textarea,
  title: "Core|Forms/Textarea"
};

export const base = () => <Textarea name="default" />;
export const primaryWithPlaceholder = (
  <Textarea name="with-placeholder" placeholder="Textarea placeholder" />
);
export const primaryWithValue = (
  <Textarea name="with-value" value="Textarea value" />
);
export const primaryWithLabel = (
  <Textarea name="with-label" label="Textarea label" />
);
export const primaryWithLabelAndPlacenolder = (
  <Textarea
    name="with-label-and-placeholder"
    label="Textarea label and placeholder"
    placeholder="placeholder"
  />
);
export const primaryInvalidWithLabel = (
  <Textarea
    name="invalid-with-label"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
  />
);
export const primaryInvalidWithLabelAndErrorMessage = (
  <Textarea
    name="invalid-with-label-and-error-message"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
    errorMessage="Ohz noz! This isn't where I parked my car"
  />
);
export const secondary = () => (
  <Textarea styleType="secondary" name="default" />
);
export const secondaryWithPlaceholder = (
  <Textarea
    styleType="secondary"
    name="with-placeholder"
    placeholder="Textarea placeholder"
  />
);
export const secondaryWithValue = (
  <Textarea styleType="secondary" name="with-value" value="Textarea value" />
);
export const secondaryWithLabel = (
  <Textarea styleType="secondary" name="with-label" label="Textarea label" />
);
export const secondaryWithLabelAndPlacenolder = (
  <Textarea
    styleType="secondary"
    name="with-label-and-placeholder"
    label="Textarea label and placeholder"
    placeholder="placeholder"
  />
);
export const secondaryInvalidWithLabel = (
  <Textarea
    styleType="secondary"
    name="invalid-with-label"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
  />
);
export const secondaryInvalidWithLabelAndErrorMessage = (
  <Textarea
    styleType="secondary"
    name="invalid-with-label-and-error-message"
    label="Invalid textarea"
    placeholder="placeholder"
    isValid={false}
    errorMessage="Ohz noz! This isn't where I parked my car"
  />
);
