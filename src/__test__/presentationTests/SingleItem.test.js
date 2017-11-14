import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import { singleItemsProps} from '../mock_data/appData';
import SingleItem from '../../components/presentations/SingleItem';

describe('<SingleItem />', () => {
  const handleClick = spy();
  const wrapper = shallow(
    <SingleItem
      {...singleItemsProps} 
      handleClick={handleClick} />);
  it('should render div', () => {
    expect(wrapper.find('div')).to.have.length(2);
  });

  it('should render spans', () => {
    expect(wrapper.find('span')).to.have.length(2);
  });

  it('should render button with class', () => {
    expect(wrapper.find('p')).to.have.length(2);
  });

  it('renders buttons with', () => {
    expect(wrapper.find('button')).to.have.length(2);
  });

  it('calls handle click when button is clicked', () => {
    expect(handleClick.called).to.be.true;
  });
});
