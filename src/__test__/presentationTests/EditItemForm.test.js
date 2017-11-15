import React from 'react';
import { shallow, mount } from 'enzyme';
import {  spy, stub } from 'sinon';
import { expect } from 'chai';
import EditItemForm from '../../components/presentations/EditItemForm';
import { editItemFormProps} from '../mock_data/appData';


describe('<EditItemForm />', () => {
  const wrapper = shallow(<EditItemForm {...editItemFormProps}/>);
  it('It should render Form', () => {
    expect(wrapper.find('Form')).to.have.length(1);
  });

  it('It should render h4', () => {
    expect(wrapper.find('h4')).to.have.length(1);
  });

  it('It should render FormGroup', () => {
    expect(wrapper.find('FormGroup')).to.have.length(1);
  });

  it('It should render Label', () => {
    expect(wrapper.find('FormGroup')).to.have.length(1);
  });

  it('It should render Input', () => {
    expect(wrapper.find('Input')).to.have.length(2);
  });
});
