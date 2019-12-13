import React from "react";

import { Icon } from "./Icon";

export default {
  component: Icon,
  title: "Core|Typography/Icon"
};

export const icon = () => (
  <>
    <Icon icon="rocket" size="h1" />
    <Icon icon="rocket" size="h2" />
    <Icon icon="rocket" size="h3" />
    <Icon icon="rocket" size="h4" />
    <Icon icon="rocket" size="xl" />
    <Icon icon="rocket" size="lg" />
    <Icon icon="rocket" size="md" />
    <Icon icon="rocket" size="sm" />
    <Icon icon="rocket" size="xs" />
  </>
);
