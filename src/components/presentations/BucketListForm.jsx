import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export const BucketListForm = props => (
  <div className='buck-form-container'>
    <Form className='create-bucket-form' onSubmit={props.onSubmit}>
      <h4>Add Bucket:</h4>
      <FormGroup >
        <Label for='title'>Title</Label>
        <Input
          name='title'
          value={props.bucketData.title}
          onChange={props.onChange}
          placeholder='Enter Title'
          className='bucket-input'
        />
        <Label for='description'>Description</Label>
        <Input
          name='description'
          value={props.bucketData.description}
          onChange={props.onChange}
          placeholder='Description(optional)'
          className='bucket-input'
        />
        <Input type='submit' className='btn-success submit-button' id='sub-one' value='Create ' />
      </FormGroup>
    </Form>
  </div>
);

export default BucketListForm;
