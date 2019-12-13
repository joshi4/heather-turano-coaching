import React, { FC } from "react";

import "./Avatar.module.scss";

export interface AvatarProps {
  image: string;
  alt: string;
}

export const Avatar: FC<AvatarProps> = ({ image, alt }) => (
  <div styleName="avatar">
    <div />
    <img src={image} alt={alt} />
  </div>
);
