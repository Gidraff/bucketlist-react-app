import React from 'react';
import promiseMiddleWare from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import configureMockStore from 'redux-mock-store';
import instance from '../../configs/axiosConfigs';
import * as allAction from '../../actions/bucketListActions';

const middleWare = [thunk, promiseMiddleWare()];
const mockStore = configureMockStore(middleWare);

describe('Bucketlist Actions', () =>{
  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });

  it('Create bucket action is dispatched', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
    const bucketData = {
      title: 'testTitle',
      description: 'testDescription'
    };
    const payload = {
      title: 'testTitle',
      description: 'testDescription'
    };
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 201,
        response: payload
      });
    });

    const expectedActions = ['CREATE_BUCKET_FULFILLED', 'CREATE_BUCKET_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.createBucket(bucketData)).then(() =>{
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('Get bucket is dispatched', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
    const payload = {
      buckets: [
        {
          title: 'testOneTitle',
          description: 'testOneDescription'
        },
        {
          title: 'testTwoTitle',
          description: 'testTwoDescription'
        },
        {
          title: 'testThreeTitle',
          description: 'testThreeDescription'
        }
      ]
    };
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });
    const expectedActions = ['GET_ BUCKETS_FULFILLED', 'GET_BUCKETS_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.getBuckets()).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });



  it('Edit buckets page', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
    const editBucketsData = {
      id: 1,
      data: {
        title: 'newTestTitle',
        description: 'newTestDescription'
      }
    };

    const payload = {
      id: 1,
      title: 'newTestTitle',
      description: 'newTestDescription'
    };
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });
    const expectedActions = ['EDIT_BUCKET_FULFILLED', 'EDIT_BUCKET_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.editBucket(editBucketsData.id, editBucketsData.data)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('Delete bucket action was dispatched', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
    const bucketId = {
      id: 1
    };

    const payload = {
      message: 'Bucket was successfully deleted'
    };

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });

    const expectedActions = ['DELETE_BUCKET_FULFILLED', 'DELETE_BUCKET_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.deleteBucket(bucketId.id)).then(() => {
      const actionTypes = store.getActions().map(action => action.Type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('Select Id is dispatched', () => {
    const bucketDetails = {
      id: 1,
      title: 'selectedBucketTitle',
      description: 'selectBucketDescription'
    };
    const expectedActions = {
      type:'SELECT_ID',
      payload: {
        id: 1,
        title: 'selectedBucketTitle',
        description: 'selectBucketDescription'
      }
    };
    expect(
      allAction.selectId(
        bucketDetails.id,
        bucketDetails.title,
        bucketDetails.description)
    ).toEqual(expectedActions);
  });



  it('CreateItem is dispatched', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
    const itemData = {
      id: 1,
      data:{
        item: 'itemTest',
        status: false
      }
    };
    const payload = {
      item_name: 'itemTest',
      status: false
    };
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 201,
        response: payload
      });
    });
    const expectedActions = ['CREATE_ITEM_FULFILLED', 'CREATE_ITEM_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.createItem(itemData.id, itemData.data)).then(() => {
      const actionTypes = store.getActions().map(action  => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('Get Items is dispatched', (done) =>{
    setTimeout(() =>{
      done();
    },1000);
    const bucketId = {
      id: 1
    };
    const payload = [
      {item_name: 'itemTest', status: false},
    ];

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });
    const expectedActions = ['GET_ITEMS_FULFILLED', 'GET_ITEMS_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.getItems(bucketId.id)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('Edit Item action was dispatched', (done) => {
    setTimeout(() =>{
      done();
    }, 1000);
    const editItemData = {
      bucketId: 1,
      id: 1,
      data:{
        item: 'newItemName',
        status: false
      }
    };
    const payload = {
      item: 'newItemName',
      status: false
    };

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });
    const expectedActions = ['EDIT_ITEM_FULFILLED', 'EDIT_ITEM_PENDING'];
    const store = mockStore({});
    return store.dispatch(
      allAction.editItem(
        editItemData.bucketId,
        editItemData.id,
        editItemData.data)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('Delete Item is dispatched', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
    const ids = {
      bucketId: 1,
      itemId: 1
    };

    const payload = {
      message: 'Item was successfully deleted'
    };

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });

    const expectedActions = ['DELETE_ITEM_FULFILLED', 'DELETE_ITEM_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.deleteItem(ids.bucketId, ids.itemId)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('searchBucket actions is dispatched', (done) => {
    setTimeout(() => {
      done();
    }, 1000);
    const searchData = {
      title: 'testSearchbucket'
    };
    const payload = {
      title: 'testSearchbucket'
    };
    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });
    const expectedActions = ['SEARCH_BUCKET_FULFILLED', 'SEARCH_BUCKET_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.searchBucket(searchData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('searchBucketItems action is dispatched', (done) => {
    setTimeout(() =>{
      done();
    }, 1000);
    const searchItemData = {
      item_name: 'thisIsASearchItem'
    };

    const payload = {
      item_name: 'thisIsASearchItem'
    };

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: payload
      });
    });
    const expectedActions = ['SEARCH_BUCKET_ITEM_FULFILLED', 'SEARCH_BUCKET_ITEM_PENDING'];
    const store = mockStore({});
    return store.dispatch(allAction.searchBucketItems(1, searchItemData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });

  it('selectItemId action is dispatched', () => {
    const expectedActions = {
      type: 'SELECT_ITEM_ID',
      payload: 1
    };
    expect(allAction.selectItemId(1)).toEqual(expectedActions);
  });

  it('Search change action is dispatched', () => {
    const expectedActions = {
      type: 'SEARCH_CHANGE'
    };
    expect(allAction.searchChange()).toEqual(expectedActions);
  });

  it('Show items is dispatched', () =>{
    const expectedActions = {
      type: 'SHOW_ITEMS'
    };
    expect(allAction.showItems()).toEqual(expectedActions);
  });

  it('Hide items is dispatched', () => {
    const expectedActions = {
      type: 'HIDE_ITEMS'
    };
    expect(allAction.hideItems()).toEqual(expectedActions);
  });

  it('disable search itemis dispatched', () => {
    const expectedActions = {
      type: 'DISABLE_IS_SEARCH_ITEM'
    };
    expect(allAction.disableIsSearchItem()).toEqual(expectedActions);
  });

  it('disable isSearch action is dispatched', () => {
    const expectedActions = {
      type: 'DISABLE_IS_SEARCH'
    };
    expect(allAction.disableIsSearch()).toEqual(expectedActions);
  });

  it('disable show search items action is dispatched', () => {
    const expectedActions = {
      type: 'DISABLE_SHOW_SEARCH_ITEMS'
    };
    expect(allAction.disableShowSearchItems()).toEqual(expectedActions);
  });

  it('set search items action is dispatched', () => {
    const expectedActions = {
      type: 'SET_SEARCH_ITEM'
    };
    expect(allAction.setSearchItem()).toEqual(expectedActions);
  });

  it('disableSearchItem action is dispatched', () => {
    const expectedActions = {
      type: 'DISABLE_SEARCH_ITEM'
    };
    expect(allAction.disableSearchItem()).toEqual(expectedActions);
  });

  it('disableSearchBucket action is dispatched', () => {
    const expectedActions = {
      type: 'DISABLE_SEARCH_BUCKET'
    };
    expect(allAction.disableSearchBucket()).toEqual(expectedActions);
  });

  it('ClearState action i dispatched', () => {
    const expectedActions = {
      type: 'CLEAR_STATE'
    };
    expect(allAction.clearState()).toEqual(expectedActions);
  });
});
