import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

const EditItemForm = (props) => {
  return (
    <Form className="" onSubmit={props.onSubmit}>
      <h4>Edit Item</h4>
      <FormGroup >
        <Label for="title">New Item Name</Label>
        <Input
          style={{ width: '100%' }}
          name="item"
          required
          title='Invalid. You cannot replace item with empty input'
          value={props.itemEditData.item}
          onChange={props.onChange}
          placeholder="New Item Name"
          className="item-input"
        />
        <Input type="submit" className="btn-success submit-button" id="sub" value="Save" />
      </FormGroup>
    </Form>

  );
};

export default EditItemForm;
