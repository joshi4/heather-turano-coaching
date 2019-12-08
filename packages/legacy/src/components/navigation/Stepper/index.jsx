import React, { Component } from "react";
import PropTypes from "prop-types";

import { Icon, Caption } from "../../typography";

import "./index.module.scss";

class Stepper extends Component {
  static propTypes = {
    steps: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0
    };
    this.goToEntry = this.goToEntry.bind(this);
  }

  goToEntry(index) {
    this.setState({
      currentStep: index
    });
  }

  render() {
    const { steps, children } = this.props;
    const { currentStep } = this.state;
    return (
      <div styleName="stepper">
        <div styleName="steps">
          {steps.map(({ icon, label }, index) => {
            const isActive = index === currentStep;
            const isPassed = index < currentStep;
            const activeClass = isActive ? "active" : "";
            const passedClass = isPassed ? "passed" : "";
            return (
              <div styleName="step" key={label}>
                <div styleName="label">
                  <Caption
                    size="lg"
                    color={(() => {
                      if (isActive) {
                        return "secondary-0";
                      }
                      if (isPassed) {
                        return "secondary-2";
                      }
                      return "grayscale-2";
                    })()}
                  >
                    {label}
                  </Caption>
                </div>
                <button
                  type="button"
                  key={index.toString()}
                  styleName={`bubble ${activeClass} ${passedClass}`}
                  onClick={() => this.goToEntry(index)}
                >
                  <Icon
                    icon={icon}
                    size="hsm"
                    position="center"
                    color={(() => {
                      if (isActive) {
                        return "secondary-0";
                      }
                      if (isPassed) {
                        return "secondary-2";
                      }
                      return "grayscale-2";
                    })()}
                  />
                </button>
              </div>
            );
          })}
          <div
            styleName="line"
            style={{ width: `${(currentStep / 2) * 100}%` }}
          />
        </div>
        <div>{children({ ...steps[currentStep] })}</div>
      </div>
    );
  }
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ).isRequired,
  children: PropTypes.func.isRequired
};

export default Stepper;
