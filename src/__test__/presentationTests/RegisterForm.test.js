import React from 'react';
import { shallow, mount } from 'enzyme';
import {  spy, stub } from 'sinon';
import { expect } from 'chai';
import {registerFormData} from '../mock_data/appData';
import RegisterForm from '../../components/presentations/RegisterForm';

describe('<RegisterForm/>', () =>{
  const wrapper = shallow(<RegisterForm  {...registerFormData}/>);
  it('It should show a div', () =>{
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('it should render a Form', () => {
    expect(wrapper.find('.form-container')).to.have.length(1);
  });

  it('it should render a FormGroup', () => {
    expect(wrapper.find('.form')).to.have.length(1);
  });

  it('It should render a h5 header', () => {
    expect(wrapper.find('.warning-header')).to.have.length(1);
  });

  it('It should render a p ', () => {
    expect(wrapper.find('p')).to.have.length(1);
  });

  it('It should render  Label', () => {
    expect(wrapper.find('Label')).to.have.length(4);
  });

  it('It should render Input ', () => {
    expect(wrapper.find('Input')).to.have.length(5);
  });
});
