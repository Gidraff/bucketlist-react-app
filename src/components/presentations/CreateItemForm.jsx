import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';


const CreateItemForm = (props) => {
  return (
    <Form className="" onSubmit={props.onSubmit}>
      <h4>Add An Item</h4>
      <FormGroup >
        <Label for="title">New Item</Label>
        <Input
          style={{ width: '100%' }}
          name="item"
          value={props.itemData.item}
          onChange={props.onChange}
          placeholder="Item Name"
          className="item-input"
        />
        <Input type="submit" className="btn-success submit-button" id="sub" value="ADD" />
      </FormGroup>
    </Form>

  );
};

export default CreateItemForm;
