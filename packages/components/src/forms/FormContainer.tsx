import React, { FC } from "react";

import "./FormContainer.module";
import { Primitive_Layout } from "@heather-turano-coaching/styles/types";

export const FormConatiner: FC<{ layout?: Primitive_Layout }> = ({
  layout = "",
  children
}) => <div styleName={layout}>{children}</div>;
