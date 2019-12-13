import React, { FC } from "react";

import { Primitive_Layout } from "@heather-turano-coaching/styles/types";

import "./ButtonGroup.module.scss";

export const ButtonGroup: FC<{ layout?: Primitive_Layout }> = ({
  layout = "stacked",
  children
}) => <div styleName={`grouping ${layout}`}>{children}</div>;
