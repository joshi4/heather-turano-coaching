import React, { FC } from "react";

import { Title, Copy, Icon } from "../typography";
import { Link } from "../buttons-links";

import "./BlogCard.module.scss";

export interface BlogCard {
  title: string;
  dateCreated: string;
  prompt: string;
  blogLinkRoute: string;
  thumbnail: string;
  thumbnailAlt: string;
  category: string;
}

const BlogCard: FC<BlogCard> = ({
  category,
  title,
  prompt,
  dateCreated,
  thumbnail,
  thumbnailAlt,
  blogLinkRoute
}) => (
  <li styleName="container">
    <Title size="h4">{category}</Title>
    <div styleName="post">
      <article styleName="img">
        <img src={thumbnail} alt={thumbnailAlt} />
      </article>
      <article styleName="summary">
        <header>
          <Copy type="label" fontSize={{ size: "xl" }}>
            {title}
          </Copy>
          <div styleName="date">
            <Copy
              type="caption"
              fontSize={{ size: "sm" }}
              fontColor={{ type: "scalable", color: "grayscale" }}
            >
              {dateCreated}
            </Copy>
          </div>
        </header>
        <div>
          <Copy type="paragraph" fontSize={{ size: "md" }}>
            {prompt}
          </Copy>
        </div>
        <Link to={blogLinkRoute}>
          <Copy
            type="label"
            fontSize={{ size: "md" }}
            fontColor={{ type: "scalable", color: "accent" }}
          >
            Keep Reading
          </Copy>
          <Icon
            icon="long-arrow-right"
            iconSize={{ size: "md" }}
            iconColor={{ type: "scalable", color: "accent" }}
          />
        </Link>
      </article>
      {/* <ul styleName="quick-links">
        <li styleName="link secondary">
          <Icon icon="facebook" size="xs" color="lightscale-3" />
        </li>
        <li styleName="link primary">
          <Icon icon="pinterest" size="xs" color="lightscale-3" />
        </li>
        <li styleName="link accent">
          <Icon icon="instagram" size="xs" color="lightscale-3" />
        </li>
        <li styleName="link grayscale">
          <Icon icon="twitter" size="xs" color="lightscale-3" />
        </li>
      </ul> */}
    </div>
  </li>
);
