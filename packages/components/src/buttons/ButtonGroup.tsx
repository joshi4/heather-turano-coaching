import React, { FC } from "react";

import { Primitive } from "@heather-turano-coaching/design-system";

import "./ButtonGroup.module.scss";

export const ButtonGroup: FC<{ layout?: Primitive.Layout }> = ({
  layout = "stacked",
  children
}) => <div styleName={`grouping ${layout}`}>{children}</div>;
