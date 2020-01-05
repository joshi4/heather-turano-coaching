import React from "react";

import { Tag } from "./Tag";
import { TagGroup } from "./TagGroup";

export default {
  component: Tag,
  title: "Basic|Tags"
};

export const base = () => <Tag text="mindfulness" />;
export const groupedWithTagArray = () => (
  <TagGroup
    tags={[
      { text: "mindfulness" },
      { text: "grow" },
      { text: "except" },
      { text: "church" },
      { text: "separate" },
      { text: "mission" },
      { text: "day" },
      { text: "walk" },
      { text: "stems" }
    ]}
  />
);
export const groupedWithComposite = () => (
  <TagGroup>
    <Tag text="mindfulness" />
    <Tag text="grow" />
    <Tag text="except" />
    <Tag text="church" />
    <Tag text="separate" />
    <Tag text="mission" />
    <Tag text="day" />
    <Tag text="walk" />
    <Tag text="stems" />
  </TagGroup>
);
