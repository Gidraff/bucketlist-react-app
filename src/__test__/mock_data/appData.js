import React from 'react';
import { spy } from 'sinon';

export const bucketFormProps = {
  bucketData: {
    title: 'testing bucket form',
    description: 'this is just test data'
  }
};

export const editFormProps = {
  editData: {
    title: 'testEditTitle',
    description: 'testEditDescription'
  }
};

export const registerFormData = {
  signUpData:{
    username: 'testuser',
    email: 'test@test.com',
    password: 'testPassword',
    confirm: 'testPassword'
  }
};

export const editItemFormProps = {
  itemEditData: {
    item: 'testEditItem'
  }
};

export const loginFormProps = {
  loginData: {
    email: 'test@test.com',
    password: 'testPassword'
  }
};

export const navData = {
  searchItemData: '',
  searchBucketData: '',
  isSearchItem: ''
};

export const bucketItemsProps = {
  itemsData:{
    searchItems: [],
  },
  id:1
};

export const createItemFormProps = {
  itemData: {
    item: '',
    status: false
  }
};

export const singleItemsProps = {
  bucketListData: {
    currentBucketTitle: 'testTitle',
    currentBucketDescription: 'testDescription'
  },
  items: [
    {item_name: 'testItems'},
    {item_name: 'testItemstwo'}
  ],
  id:1,
};



export const bucketlistsData = {
  bucketlists: [
    {
      title: 'testingone',
      description: 'desone'
    },
    {
      title: 'testingtwo',
      description: 'desctwo'
    },
    {
      title: 'testthree',
      description: 'descth'
    }
  ]
};
