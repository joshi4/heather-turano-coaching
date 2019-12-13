import React, { FC } from "react";

import { Primitive } from "@heather-turano-coaching/design-system";

import "./FormContainer.module";

export const FormConatiner: FC<{ layout?: Primitive.Layout }> = ({
  layout = "",
  children
}) => <div styleName={layout}>{children}</div>;
