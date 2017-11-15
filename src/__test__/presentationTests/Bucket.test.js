import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Bucket from '../../components/presentations/Bucket';

describe('<Buckets />', () => {
  let wrapper;
  wrapper = shallow(<Bucket />);

  it('renders buckets', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should render unordered list', () => {
    expect(wrapper.find('ul')).to.have.length(1);
  });
});
