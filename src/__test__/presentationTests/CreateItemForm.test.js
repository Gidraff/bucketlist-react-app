import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import {createItemFormProps} from '../mock_data/appData';
import CreateItemForm  from '../../components/presentations/CreateItemForm';


describe('<CreateItemForm />', () => {
  const wrapper = shallow(<CreateItemForm {...createItemFormProps}/>);
  it('should render Form', () => {
    expect(wrapper.find('Form')).to.have.length(1);
  });

  it('It should render a h4 header', () => {
    expect(wrapper.find('h4')).to.have.length(1);
  });

  it('It should render a FormGroup', () => {
    expect(wrapper.find('FormGroup')).to.have.length(1);
  });

  it('It should render a Label', () => {
    expect(wrapper.find('Label')).to.have.length(1);
  });

  it('It should render Input field', () => {
    expect(wrapper.find('Input')).to.have.length(2);
  });
});
