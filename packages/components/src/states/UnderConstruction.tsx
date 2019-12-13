import React, { FC } from "react";

import "./UnderConstruction.module.scss";

export const UnderConstruction: FC<{ img: string }> = ({ img }) => (
  <div styleName="placeholder">
    <img src={img} alt="under construction - heather turano coaching logo" />
  </div>
);
