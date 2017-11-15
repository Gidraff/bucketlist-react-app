import React from 'react';
import { shallow, mount } from 'enzyme';
import {  spy, stub } from 'sinon';
import { expect } from 'chai';
import Footer from '../../components/presentations/Footer';

describe('<Footer />', () => {
  const wrapper = shallow(<Footer />);
  it('should render  footer with className', () => {
    expect(wrapper.find('.footer')).to.have.length(1);
  });
  it('should render Footer ', () => {
    expect(wrapper.find('footer')).to.have.length(1);
  });
  it('should render Grid ', () => {
    expect(wrapper.find('Grid')).to.have.length(1);
  });
  it('should render div', () => {
    expect(wrapper.find('.text-center')).to.have.length(1);
  });
});
