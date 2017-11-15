import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const RegisterForm = props => (
  <div>
    <Form className="form-container" onSubmit={props.onSignUpSubmit}>
      <FormGroup className="form">
        <h5 className="warning-header">{props.error}</h5>
        <p className="register-header-text"><b>Fill in the form to create your account</b></p>
        <Label for="exampleEmail" className="lab">Username</Label>
        <Input
          pattern="[a-z]{3,}"
          required
          type="text"
          onChange={props.onSignUpChange}
          name="username"
          className="username"
          value={props.signUpData.username}
          placeholder="Enter you username"
          title="Invalid username eg example john"
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
          title="Invalid email, john@doe.com"
        />
        <Label for="password" className="lab">password</Label>
        <Input
          pattern=".{7,20}"
          min="8"
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
          min="8"
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
