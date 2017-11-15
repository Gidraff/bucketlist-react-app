import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const LoginForm = props => (
  <Form className='form-container' onSubmit={props.onLoginSubmit}>
    <FormGroup className='form-group'>

      <p className="login-header-text"><b>Enter your email and password to Login</b></p>
      <Label for='email' className='lab'>Email</Label>
      <Input
        required
        type='email'
        onChange={props.onLoginChange}
        name='email'
        className='input-group'
        value={props.loginData.email}
        placeholder='Enter you email'
      />
      <Label for='password' className='lab'>password</Label>
      <Input
        required
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
