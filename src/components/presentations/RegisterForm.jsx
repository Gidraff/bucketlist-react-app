import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const RegisterForm = props => (
  <div>
    <Form className="form-container" onSubmit={props.onSignUpSubmit}>
      <FormGroup className="form">
        <h5 className="warning-header">{props.error}</h5>
        <p><b>Enter you Credentials to Register</b></p>
        <Label for="exampleEmail" className="lab">Username</Label>
        <Input
          pattern=".{3,}"
          required
          type="text"
          onChange={props.onSignUpChange}
          name="username"
          className="username"
          value={props.signUpData.username}
          placeholder="Enter you username"
        />
        <Label for="email" className="lab">Email</Label>
        <Input
          type="email"
          required
          onChange={props.onSignUpChange}
          name="email"
          className="username"
          value={props.signUpData.email}
          placeholder="Enter you email"
        />
        <Label for="password" className="lab">password</Label>
        <Input
          pattern=".{7,20}"
          required
          type="password"
          onChange={props.onSignUpChange}
          name="password"
          className="username"
          value={props.signUpData.password}
          placeholder="Password"
        />
        <Label for="password" className="lab">Confirm</Label>
        <Input
          pattern=".{7,20}"
          required
          type="password"
          onChange={props.onSignUpChange}
          name="confirm"
          className="username"
          value={props.signUpData.confirm}
          placeholder="Confirm password"
        />
        <Input type="submit" className="btn-success submit-button" id="sub" value="Sign Up" />
      </FormGroup>

    </Form>
  </div>
);

export default RegisterForm;
