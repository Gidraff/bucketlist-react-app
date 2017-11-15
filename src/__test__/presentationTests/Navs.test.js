import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import {UnAuthenticatedNav} from '../../components/presentations/Navs';

describe('<UnAuthenticatedNav />', () => {
  const wrapper = shallow(<UnAuthenticatedNav />);

  it('should render nav ', () => {
    expect(wrapper.find('nav')).to.have.length(1);
  });

  it('should render navigation-list', () => {
    expect(wrapper.find('.navigation-list')).to.have.length(1);
  });

  it('should render unordered list', () => {
    expect(wrapper.find('ul')).to.have.length(1);
  });

  it('should render Link', () => {
    expect(wrapper.find('Link')).to.have.length(2);
  });
});
