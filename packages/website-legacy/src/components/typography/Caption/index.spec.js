import React from "react";
import Caption from "./index";

const props = {
  color: "light",
  color: "black",
  copy: "test"
};

describe("<Caption />", () => {
  const wrapper = shallowWrapper(Caption)(props);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the text", () => {
    expect(wrapper.find("p").text()).toEqual(props.copy);
  });
});
