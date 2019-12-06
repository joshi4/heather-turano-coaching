import React, { Component } from "react";
import PropTypes from "prop-types";

import { Paragraph, Icon, Title } from "../../../components/typography";

import "./index.module.scss";

class InteractiveCircleList extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activeBubbleIndex: 0
    };
  }

  handleClick(index) {
    this.setState({
      activeBubbleIndex: index
    });
  }

  render() {
    const { activeBubbleIndex } = this.state;
    const { list } = this.props;

    return (
      <>
        <ul styleName="container">
          {list.map(({ title, icon, blurb }, i) => {
            const isActive = activeBubbleIndex === i;
            return (
              <li key={title} styleName="pillar">
                <button
                  type="button"
                  styleName={`bubble ${isActive ? "active" : ""}`}
                  onClick={() => this.handleClick(i)}
                >
                  <Icon
                    icon={icon}
                    size="hmd"
                    position="center"
                    color={isActive ? "lightscale-3" : "secondary-0"}
                  />
                </button>
                <div styleName="blurb">
                  <Title size="md">{title}</Title>
                  <Paragraph size="sm">{blurb}</Paragraph>
                </div>
              </li>
            );
          })}
        </ul>
        <div styleName="outsideBlurb">
          <Title size="md">{list[activeBubbleIndex].title}</Title>
          <Paragraph size="sm">{list[activeBubbleIndex].blurb}</Paragraph>
        </div>
      </>
    );
  }
}

InteractiveCircleList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      blurb: PropTypes.string.isRequired
    })
  ).isRequired
};

export default InteractiveCircleList;
