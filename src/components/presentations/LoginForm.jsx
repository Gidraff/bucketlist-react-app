import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const LoginForm = props => (
  <Form className='form-container' onSubmit={props.onLoginSubmit}>
    <FormGroup className='form'>
      <Label for='email' className='lab'>Email</Label>
      <Input
        type='email'
        onChange={props.onLoginChange}
        name='email'
        className='username'
        value={props.loginData.email}
        placeholder='Enter you email'
      />
      <Label for='password' className='lab'>password</Label>
      <Input
        type='password'
        onChange={props.onLoginChange}
        name='password'
        className=''
        value={props.loginData.password}
        placeholder='Password'
      />
      <Input type='submit' className='btn-success submit-button' id='sub' value='Login' />
    </FormGroup>
  </Form>
);
export default LoginForm;
