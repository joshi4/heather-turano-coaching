import React, { FC } from "react";

import "./HeroImage.module.scss";

export interface HeroImageProps {
  image: string;
  alt: string;
}

export const HeroImage: FC<HeroImageProps> = ({ image, alt }) => (
  <div styleName="hero-img">
    <img src={image} alt={alt} />
  </div>
);
