import React, { FC } from "react";

import { Primitive } from "@heather-turano-coaching/design-system";

import "./InputGroup.module.scss";

export const InputGroup: FC<{ layout?: Primitive.Layout }> = ({
  layout = "stacked",
  children
}) => <div styleName={`group ${layout}`}>{children}</div>;
