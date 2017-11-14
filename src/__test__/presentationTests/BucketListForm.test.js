import React from 'react';
import { shallow, mount } from 'enzyme';
import {  spy, stub } from 'sinon';
import { expect } from 'chai';
import BucketListForm from '../../components/presentations/BucketListForm';
import {bucketFormProps} from '../mock_data/appData';


describe('<BucketListForm />', () => {
  const handleSubmit = spy();
  const handleChange= spy();

  const wrapper = mount(
    <BucketListForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      {...bucketFormProps}/>);

  it('should render a div', () => {
    expect(wrapper.find('.buck-form-container')).to.have.length(1);
  });

  it('should render bucket the component', () => {
    expect(wrapper.find('form.create-bucket-form')).to.have.length(1);
  });

  it('should render a form group', () => {
    expect(wrapper.find('FormGroup')).to.have.length(1);
  });

  it('should rendera labels', () => {
    expect(wrapper.find('Label')).to.have.length(2);
  });

  it('should render Input', () => {
    expect(wrapper.find('Input')).to.have.length(3);
  });

  it('should render a submit button', () => {
    expect(wrapper.find('input#sub-one')).to.have.length(1);
  });

  it('it should trigger callback on title change', () => {
    const title = wrapper.find('input[name="title"]');

    // simulate change
    title.simulate('change', {
      e: {
        name: 'test',
        value: 'testing value'
      }
    });

    expect(handleChange.calledOnce).to.be.true;
  });

  it('it should trigger callback on description change', () => {
    const description = wrapper.find('input[name="description"]');
    handleChange.reset();

    // simulate change
    description.simulate('change', {
      e: {
        name: 'describe',
        value: 'describe value'
      }
    });

    expect(handleChange.calledOnce).to.be.true;
  });

  it('should submit form', () => {
    const form = wrapper.find('form.create-bucket-form');

    form.simulate('submit', {
      e: {}
    });

    expect(handleSubmit.calledOnce).to.be.true;
  });
});
