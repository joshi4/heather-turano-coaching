import React from 'react';
import Heading from './index';

const props = {
  copy: 'test',
  color: 'white',
  fontStyle: 'regular',
};

describe('<Heading />', () => {
  const wrapper = shallowWrapper(Heading)(props);
  const styleClass = `.${props.color}-${props.fontStyle}`;
  
  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render its defualt as a h1', () => {
    expect(wrapper.type()).toEqual('h1');
  });

  it('should have a combined style of color and style', () => {
    expect(wrapper.find(styleClass).exists()).toBeTruthy();
  });

  it('should render the copy as the props copy', () => {
    expect(wrapper.text()).toEqual(props.copy);
  });

  describe('when it is an h1', () => {
    const wrapper = shallowWrapper(Heading)({
      ...props,
      size: 'h1',
    });
    it('should render as a h1', () => {
      expect(wrapper.type()).toEqual('h1');
    });

    it('it should have a combined style of color and style', () => {
      expect(wrapper.find(styleClass).exists()).toBeTruthy();
    });

    it('should render the copy as the props copy', () => {
      expect(wrapper.text()).toEqual(props.copy);
    });
  });

  describe('when it is an h2', () => {
    const wrapper = shallowWrapper(Heading)({
      ...props,
      size: 'h2',
    });
    it('should render as a h2', () => {
      expect(wrapper.type()).toEqual('h2');
    });

    it('it should have a combined style of color and style', () => {
      expect(wrapper.find(styleClass).exists()).toBeTruthy();
    });

    it('should render the copy as the props copy', () => {
      expect(wrapper.text()).toEqual(props.copy);
    });
  });

  describe('when it is an h3', () => {
    const wrapper = shallowWrapper(Heading)({
      ...props,
      size: 'h3',
    });
    it('should render as a h3', () => {
      expect(wrapper.type()).toEqual('h3');
    });

    it('it should have a combined style of color and style', () => {
      expect(wrapper.find(styleClass).exists()).toBeTruthy();
    });

    it('should render the copy as the props copy', () => {
      expect(wrapper.text()).toEqual(props.copy);
    });
  });

  describe('when it is an h4', () => {
    const wrapper = shallowWrapper(Heading)({
      ...props,
      size: 'h4',
    });
    it('should render as a h4', () => {
      expect(wrapper.type()).toEqual('h4');
    });

    it('it should have a combined style of color and style', () => {
      expect(wrapper.find(styleClass).exists()).toBeTruthy();
    });

    it('should render the copy as the props copy', () => {
      expect(wrapper.text()).toEqual(props.copy);
    });
  });

  describe('when it is an h5', () => {
    const wrapper = shallowWrapper(Heading)({
      ...props,
      size: 'h5',
    });
    it('should render as a h5', () => {
      expect(wrapper.type()).toEqual('h5');
    });

    it('it should have a combined style of color and style', () => {
      expect(wrapper.find(styleClass).exists()).toBeTruthy();
    });

    it('should render the copy as the props copy', () => {
      expect(wrapper.text()).toEqual(props.copy);
    });
  });

  describe('when it is an h6', () => {
    const wrapper = shallowWrapper(Heading)({
      ...props,
      size: 'h6',
    });
    it('should render as a h6', () => {
      expect(wrapper.type()).toEqual('h6');
    });

    it('it should have a combined style of color and style', () => {
      expect(wrapper.find(styleClass).exists()).toBeTruthy();
    });

    it('should render the copy as the props copy', () => {
      expect(wrapper.text()).toEqual(props.copy);
    });
  });

  describe('when it is an section', () => {
    const wrapper = shallowWrapper(Heading)({
      ...props,
      size: 'section',
    });
    it('should render as a h6', () => {
      expect(wrapper.type()).toEqual('h6');
    });

    it('it should have a combined style of color and section', () => {
      expect(wrapper.find(`.section.${props.color}`).exists()).toBeTruthy();
    });

    it('should render the copy as the props copy', () => {
      expect(wrapper.text()).toEqual(props.copy);
    });
  });
});
