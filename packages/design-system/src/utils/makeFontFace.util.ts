import { Styles } from "polished/lib/types/style";

import {
  systemFontFaceDefinition,
  FontFaceConfig
} from "../configs/font.config";

type MakeFontFace = ({ fontFaceType }: FontFaceConfig) => Styles;

export const makeFontFace: MakeFontFace = ({ fontFaceType = "system" }) =>
  fontFaceType !== "system" ? {} : systemFontFaceDefinition;
