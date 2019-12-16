import React, { FC, useState, ReactNode } from "react";

import { Icon, Copy } from "../typography";

import "./Stepper.module.scss";
import { IconName } from "@fortawesome/pro-light-svg-icons";

export interface Step {
  icon: IconName;
  label: string;
}

export interface StepperProps {
  steps: Step[];
  children: (step: Step) => ReactNode;
}

export const Stepper: FC<StepperProps> = ({ steps, children }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const goToEntry = (index: number) => setCurrentStep(index);

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
                <Copy
                  type="caption"
                  size="lg"
                  color={(() => {
                    if (isActive) {
                      return "secondary";
                    }
                    if (isPassed) {
                      return "secondary";
                    }
                    return "grayscale";
                  })()}
                >
                  {label}
                </Copy>
              </div>
              <button
                type="button"
                key={index.toString()}
                styleName={`bubble ${activeClass} ${passedClass}`}
                onClick={() => goToEntry(index)}
              >
                <Icon
                  icon={icon}
                  size="h4"
                  color={(() => {
                    if (isActive) {
                      return "secondary";
                    }
                    if (isPassed) {
                      return "secondary";
                    }
                    return "grayscale";
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
};
