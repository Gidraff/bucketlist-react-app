import React from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";

const EditForm = props => (
  <Form className="" onSubmit={props.onSubmit}>
    <h4>Edit BucketList</h4>
    <FormGroup >
      <Label for="title">New Title</Label>
      <Input
        style={{ width: "100%" }}
        name="title"
        value={props.editData.title}
        onChange={props.onChange}
        placeholder="New Title"
        className="bucket-input"
      />
      <Label for="description">New Description</Label>
      <Input
        style={{ width: "100%" }}
        name="description"
        value={props.editData.description}
        onChange={props.onChange}
        placeholder="New Description(optional)"
        className="bucket-input"
      />
      <Input type="submit" className="btn-success submit-button" id="sub" value="Edit " />
    </FormGroup>
  </Form>
);

export default EditForm;
