import React from "react";
import { Form, FormGroup, Label, Input } from 'reactstrap';

const EditItemForm = (props) => {
  return (
    <Form className="" onSubmit={props.onSubmit}>
      <h4>Edit Item</h4>
      <FormGroup >
        <Label for="title">New Item Name</Label>
        <Input
          style={{ width: "100%" }}
          name="item"
          value={props.itemEditData.item}
          onChange={props.onChange}
          placeholder="New Item Name"
          className="item-input"
        />
        <Label for="description">Check me out</Label>
        <Input
          style={{ width: "100%" }}
          name="status"
          type="checkbox"
          value={props.itemEditData.status}
          onChange={props.onChange}
          className="item-input"
        />
        <Input type="submit" className="btn-success submit-button" id="sub" value="EDIT" />
      </FormGroup>
    </Form>
        
  );
};

export default EditItemForm;