import React from "react";

import { Title } from "./Title";

export default {
  component: Title,
  title: "Core|Typography/Title"
};

export const title = () => (
  <>
    <Title size="h2">Lorem ipsum</Title>
    <Title size="h3">lorem ipsum</Title>
    <Title size="h4">lorem ipsum</Title>
  </>
);
