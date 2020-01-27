import React from "react";

import { FontFamily } from "./FontFamily";

export const addFont = storyFn => (
  <div>
    <FontFamily />
    {storyFn()}
  </div>
);
