import React from 'react';
import { shallow, mount} from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';
import { bucketlistsData } from '../mock_data/appData';
import BucketList from '../../components/presentations/BucketLists';

describe('<BucketList />', () => {
  const showItems = spy();
  const handleDeleteClick = spy();
  const handleClick = spy();
  const wrapper = shallow(
    <BucketList
      bucketlistsData={bucketlistsData}
      showItems={showItems}
      handleDeleteClick={handleDeleteClick}
      handleClick={handleClick}
    />);
  it('should render div', () => {
    expect(wrapper.find('.list-container')).to.have.length(1);
  });
  it('should render h6 header', () => {
    expect(wrapper.find('.header-title')).to.have.length(1);
  });
  it('should render a <Bucket />', () => {
    expect(wrapper.find('Bucket')).to.have.length(1);
  });

  it('should call handleClick when clicked', () => {
    expect(handleClick.called).to.be.true;
  });
});
