import React from 'react';
import { shallow, mount } from 'enzyme';
import {  spy, stub } from 'sinon';
import { expect } from 'chai';
import { editFormProps } from '../mock_data/appData';
import EditForm from '../../components/presentations/EditForm';

describe('<EditForm />', () => {
  const wrapper = shallow(
    <EditForm  {...editFormProps}/>);

  it('should render a Form', () => {
    expect(wrapper.find('Form')).to.have.length(1);
  });
  it('should render h4 header', () => {
    expect(wrapper.find('h4')).to.have.length(1);
  });
  it('should render FormGroup', () => {
    expect(wrapper.find('FormGroup')).to.have.length(1);
  });
  it('should render Label', () => {
    expect(wrapper.find('Label')).to.have.length(2);
  });
  it('should render Input', () => {
    expect(wrapper.find('.bucket-input')).to.have.length(2);
  });
  it('should render submit input', () => {
    expect(wrapper.find('#sub')).to.have.length(1);
  });
});
