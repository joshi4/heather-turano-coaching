import React from "react";
import PropTypes from "prop-types";

import { Link } from "../../../components/links";
import { Icon, Label } from "../../../components/typography";
import "./index.module.scss";

const BlogNavigation = ({ pagePrev, pageNext }) => (
  <footer styleName="blog-footer">
    <div styleName="link left">
      {pagePrev && (
        <Link to={pagePrev}>
          <Icon icon="long-arrow-left" size="lg" color="accent-0" />
          <Label size="lg" color="accent-0">
            Older stuff
          </Label>
        </Link>
      )}
    </div>
    <div styleName="link right">
      {pageNext && (
        <Link to={pageNext}>
          <Label size="lg" color="accent-0">
            Newer stuff
          </Label>
          <Icon icon="long-arrow-right" size="lg" color="accent-0" />
        </Link>
      )}
    </div>
  </footer>
);

BlogNavigation.propTypes = {
  pagePrev: PropTypes.string,
  pageNext: PropTypes.string
};

BlogNavigation.defaultProps = {
  pagePrev: null,
  pageNext: null
};

export default BlogNavigation;
