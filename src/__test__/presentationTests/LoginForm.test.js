import React from 'react';
import { shallow, mount } from 'enzyme';
import {  spy, stub } from 'sinon';
import { expect } from 'chai';
import {loginFormProps} from '../mock_data/appData';
import LoginForm from '../../components/presentations/LoginForm';

describe('<LoginForm/>', () =>{
  const wrapper = shallow(<LoginForm  {...loginFormProps}/>);

  it('it should render a Form', () => {
    expect(wrapper.find('.form-container')).to.have.length(1);
  });

  it('it should render a FormGroup', () => {
    expect(wrapper.find('.form-group')).to.have.length(1);
  });

  it('It should render  Label', () => {
    expect(wrapper.find('Label')).to.have.length(2);
  });

  it('It should render Input ', () => {
    expect(wrapper.find('Input')).to.have.length(3);
  });
});
