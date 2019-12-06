import Label from "./index";

const props = {
  color: "light",
  copy: "test"
};

describe("<Label />", () => {
  const wrapper = shallowWrapper(Label)(props);

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render the text", () => {
    expect(wrapper.find("p").text()).toEqual(props.copy);
  });
});
