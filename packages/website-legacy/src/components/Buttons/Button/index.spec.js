import Button from "./index";

const props = {
  styleName: "primary",
  disabled: false,
  kind: "primary",
  action: null,
  label: "i am a button"
};

describe("<Button />", () => {
  it("should render correctly", () => {
    const wrapper = shallowWrapper(Button)(props);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render as a button with a type of button", () => {
    const wrapper = shallowWrapper(Button)({ ...props, type: "button" });
    expect(wrapper.type()).toEqual("button");
    expect(wrapper.find('[type="button"]')).toHaveLength(1);
  });

  it("should render as a button with a type of submit", () => {
    const wrapper = shallowWrapper(Button)({ ...props, type: "submit" });
    expect(wrapper.find('[type="submit"]')).toHaveLength(1);
  });
});
