import React, { FC } from "react";

import { Primitive } from "@heather-turano-coaching/design-system";

import "./FormContainer.module.scss";

export const FormConatiner: FC<{ layout?: Primitive.Layout }> = ({
  layout = "stacked",
  children
}) => <div styleName={layout}>{children}</div>;
