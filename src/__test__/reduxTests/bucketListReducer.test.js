import bucketListReducer from '../../reducers/bucketListReducer';

const initialState = {
  bucketResponse: '',
  bucketlists: [],
  items: [],
  searchBuckets: [],
  currentBucketTitle: null,
  currentBucketDescription: null,
  searchItems: [],
  pages: null,
  nextPage: null,
  prevPage: null,
  isSearchItem: false,
  showItems: false,
  showSearchItem: false,
  isSearch: false,
  isCreateSuccess: false,
  isGetSuccess: false,
  loading: false,
  current_id: null,
  current_item_id: null,
  bucketEditMessage: null,
  bucketError: null,
  bucketMessage: null,
  bucketItemsError: null,
  bucketItemsMessage: null,
  bucketDeleteMessage: null,
  EditBucketItemsMessage: null,
  DeleteBucketItemMessage: null
};

describe('BucketList reducer', () => {
  it('CASE: CREATE_BUCKET_FULFILLED ', () => {
    const action = {
      type: 'CREATE_BUCKET_FULFILLED',
      payload: {
        data:{
          title: 'testBucketTitle',
          description: 'testBucketDescription',
          message: 'Successfully Created'
        }
      }
    };

    const expected = {
      bucketlists: [
        {
          title: 'testBucketTitle',
          message: 'Successfully Created',
          description: 'testBucketDescription',
        }
      ],
      bucketResponse: '',
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: true,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketCreateMessage: 'Successfully Created',
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });


  it('CASE: CREATE_BUCKET_PENDING', () => {
    const action = {
      type: 'CREATE_BUCKET_PENDING'
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      bucketCreateMessage: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: true,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null,
      createBucketStatus:null,
      createConflictError:null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('CASE: GET_BUCKETS_FULFILLED ', () => {
    const action = {
      type: 'GET_BUCKETS_FULFILLED',
      payload: {
        data:{
          buckets:[{
            title: 'testBucketTitle',
            description: 'testBucketDescription'
          }],
          message: 'Successfully retrieved',
          next_page: null,
          prev_page: null,
          pages:  null

        }
      }
    };

    const expected = {
      bucketlists: [
        {
          title: 'testBucketTitle',
          description: 'testBucketDescription',
        }
      ],
      bucketResponse: '',
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: 'Successfully retrieved',
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);

  });

  it('CASE: GET_BUCKETS_PAGES_FULFILLED', () => {
    const action = {
      type: 'GET_BUCKETS_PAGES_FULFILLED',
      payload: {
        data: {
          buckets: [
            {
              title: 'testBucketTitle',
              description: 'testBucketDescription',
            }
          ],
          pages: null,
          next_page: null,
          prev_page: null,
        }
      }
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [
        {
          title: 'testBucketTitle',
          description: 'testBucketDescription',
        }
      ],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('CASE: GET_BUCKETS_PENDING', () => {
    const action = {
      type: 'GET_BUCKETS_PENDING',
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: true,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('CASE: SELECT_ID', () => {
    const action = {
      type: 'SELECT_ID',
      payload: {
        id: 1,
        title: 'testSelectTitle',
        description: 'testSelectDescription'
      }
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: 'testSelectTitle',
      currentBucketDescription:'testSelectDescription',
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: 1,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('CASE: EDIT_BUCKET_FULFILLED', () => {
    const action = {
      type: 'EDIT_BUCKET_FULFILLED',
      payload: {
        data: {
          title: 'newTestTitle',
          description: 'newTestDescription',
          message: 'Changes saved'
        }
      }
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [
        {
          title: 'newTestTitle',
          description: 'newTestDescription',
          message: 'Changes saved',
        }
      ],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: 'Changes saved',
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });
  it('CASE: EDIT_BUCKET_PENDING ', () => {
    const action = {
      type: 'EDIT_BUCKET_PENDING',
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: true,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      editBucketStatus: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: DELETE_BUCKET_PENDING', () => {
    const action = {
      type: 'DELETE_BUCKET_PENDING',
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: true,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage:null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: SEARCH_BUCKET_FULFILLED', () => {
    const action = {
      type: 'SEARCH_BUCKET_FULFILLED',
      payload:{
        data:{
          results: [{
            title: 'searchTestTitle',
            description: 'searchDescription'
          }],
          message: 'Bucket was found'
        }
      }
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [{
        title: 'searchTestTitle',
        description: 'searchDescription'
      }],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: true,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: 'Bucket was found',
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage:null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };
    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: DISABLE_IS_SEARCH', () => {
    const action = {
      type: 'DISABLE_IS_SEARCH'
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage:null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };
    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: SEARCH_CHANGE', () => {
    const action = {
      type: 'SEARCH_CHANGE',
    };
    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };
    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: GET_ITEMS_FULFILLED', () => {
    const action = {
      type: 'GET_ITEMS_FULFILLED',
      payload: {
        data: {
          items:[
            {
              item: 'retrievedTitle',
              status: false
            }
          ],
          message: 'Items returned successfully'
        }
      }
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [
        {
          item: 'retrievedTitle',
          status: false
        }
      ],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: 'Items returned successfully',
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: SELECT_ITEM_ID', () => {
    const action = {
      type: 'SELECT_ITEM_ID',
      payload: 1
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: 1,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: SHOW_ITEMS', () => {
    const action = {
      type: 'SHOW_ITEMS'
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: true,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };
    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: SET_SEARCH_ITEM', () => {
    const action = {
      type: 'SET_SEARCH_ITEM'
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: true,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: DISABLE_SEARCH_ITEM', () => {
    const action = {
      type: 'DISABLE_SEARCH_ITEM'
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };
    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: DISABLE_SHOW_SEARCH_ITEMS', () => {
    const action = {
      type: 'DISABLE_SHOW_SEARCH_ITEMS'
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };

    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: DISABLE_SEARCH_BUCKET', () => {
    const action = {
      type: 'DISABLE_SEARCH_BUCKET'
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };
    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

  it('CASE: HIDE_ITEMS', () => {
    const action = {
      type: 'HIDE_ITEMS'
    };

    const expected = {
      bucketResponse: '',
      bucketlists: [],
      items: [],
      searchBuckets: [],
      currentBucketTitle: null,
      currentBucketDescription: null,
      searchItems: [],
      pages: null,
      nextPage: null,
      prevPage: null,
      isSearchItem: false,
      showItems: false,
      showSearchItem: false,
      isSearch: false,
      isCreateSuccess: false,
      isGetSuccess: false,
      loading: false,
      current_id: null,
      current_item_id: null,
      bucketEditMessage: null,
      bucketError: null,
      bucketMessage: null,
      bucketItemsError: null,
      bucketItemsMessage: null,
      bucketDeleteMessage: null,
      EditBucketItemsMessage: null,
      DeleteBucketItemMessage: null
    };
    const newState = bucketListReducer(initialState, action);
    expect(newState).toEqual(expected);
  });

});
