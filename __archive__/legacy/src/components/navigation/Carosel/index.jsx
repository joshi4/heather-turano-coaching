import React, { Component } from "react";
import PropTypes from "prop-types";

import "./index.module.scss";

class Carosel extends Component {
  static propTypes = {
    entries: PropTypes.array.isRequired,
    children: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      currentlyViewingEntry: 0
    };
    this.goToEntry = this.goToEntry.bind(this);
  }

  goToEntry(index) {
    this.setState({
      currentlyViewingEntry: index
    });
  }

  render() {
    const { entries, children } = this.props;
    const { currentlyViewingEntry } = this.state;
    return (
      <div styleName="carosel">
        <div>{children({ ...entries[currentlyViewingEntry] })}</div>
        <footer>
          {entries.map((_, index) => (
            <button
              type="button"
              key={index.toString()}
              styleName={`bubble ${
                index === currentlyViewingEntry ? "active" : ""
              }`}
              onClick={() => this.goToEntry(index)}
            />
          ))}
        </footer>
      </div>
    );
  }
}

export default Carosel;
