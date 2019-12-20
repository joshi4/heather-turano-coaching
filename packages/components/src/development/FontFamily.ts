import { createGlobalStyle } from "styled-components";

import { makeFontFace } from "@heather-turano-coaching/design-system";

export const FontFamily = createGlobalStyle`
  ${makeFontFace({ fontFaceType: "system" })};
`;
