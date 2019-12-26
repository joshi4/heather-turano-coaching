import React, { FC } from "react";
import { Layout } from "@heather-turano-coaching/design-system/types/primitive";

import "./FormContainer.module.scss";

export const FormConatiner: FC<{ layout?: Layout }> = ({
  layout = "stacked",
  children
}) => <div styleName={layout}>{children}</div>;
