import React, { FC } from "react";

import { Link } from "../buttons-links";
import { Icon, Copy } from "../typography";

import "./BlogNavigation.module.scss";

export interface BlogNavigationProps {
  pagePrev?: string;
  pageNext?: string;
}

export const BlogNavigation: FC<BlogNavigationProps> = ({
  pagePrev,
  pageNext
}) => (
  <footer styleName="blog-footer">
    <div styleName="link left">
      {pagePrev && (
        <Link to={pagePrev}>
          <Icon
            icon="long-arrow-left"
            iconSize={{ size: "lg" }}
            iconColor={{ type: "scalable", color: "accent" }}
          />
          <Copy
            type="label"
            fontSize={{ size: "lg" }}
            fontColor={{ type: "scalable", color: "accent" }}
          >
            Older stuff
          </Copy>
        </Link>
      )}
    </div>
    <div styleName="link right">
      {pageNext && (
        <Link to={pageNext}>
          <Copy
            type="label"
            fontSize={{ size: "lg" }}
            fontColor={{ type: "scalable", color: "accent" }}
          >
            Newer stuff
          </Copy>
          <Icon
            icon="long-arrow-right"
            iconSize={{ size: "lg" }}
            iconColor={{ type: "scalable", color: "accent" }}
          />
        </Link>
      )}
    </div>
  </footer>
);
