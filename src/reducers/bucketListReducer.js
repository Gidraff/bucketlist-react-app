import _ from 'lodash';

export const initialState = {
  bucketResponse: '',
  bucketlists: [],
  items: [],
  searchBuckets: [],
  currentBucketTitle: null,
  currentBucketDescription: null,
  createConflictError: null,
  createBucketStatus: null,
  deleteBucketStatus: null,
  bucketCreateMessage: null,
  bucketEditMessage: null,
  editBucketStatus: null,
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
  currentBucketId: null,
  loading: false,
  createBucketItemStatus:null,
  current_id: null,
  current_item_id: null,
  bucketError: null,
  bucketMessage: null,
  bucketItemsError: null,
  deleteBucketItemStatus: null,
  bucketItemsMessage: null,
  bucketDeleteMessage: null,
  EditBucketItemsMessage: null,
  DeleteBucketItemMessage: null
};


export default (state = initialState, action) => {
  switch (action.type) {
  case 'CREATE_BUCKET_FULFILLED':
    return {
      ...state,
      bucketlists: _.concat(state.bucketlists, action.payload.data),
      isCreateSuccess: true,
      bucketCreateMessage: action.payload.data.message,


      createBucketStatus: action.payload.status
    };

  case 'CREATE_BUCKET_PENDING':
    return {
      ...state,
      loading: true,
      DeleteBucketItemMessage:null,
      EditBucketItemsMessage:null,
      bucketCreateMessage:null,
      bucketDeleteMessage:null,
      bucketEditMessage:null,
      bucketError:null,
      bucketItemsError:null,
      bucketItemsMessage:null,
      createBucketStatus:null,
      createConflictError:null
    };

  case 'CREATE_BUCKET_REJECTED':
    return {
      ...state,
      isCreateSuccess: false,
      bucketError: 'Invalid details.Please try again',
      createConflictError: action.payload.response.data.error,
      createBucketStatus: action.payload.response.status
    };

  case 'GET_BUCKETS_FULFILLED':
    return {
      ...state,
      bucketlists: action.payload.data.buckets ,
      bucketMessage: action.payload.data.message,
      pages: action.payload.data.pages,
      nextPage: action.payload.data.next_page,
      prevPage: action.payload.data.prev_page
    };

  case 'GET_BUCKETS_PAGES_FULFILLED':
    return {
      ...state,
      bucketlists: action.payload.data.buckets,
      pages: action.payload.data.pages,
      nextPage: action.payload.data.next_page,
      prevPage: action.payload.data.prev_page
    };

  case 'GET_BUCKETS_PENDING':
    return {
      ...state, loading: true};

  case 'GET_BUCKETS_REJECTED':
    return {
      ...state,
      bucketError: action.payload.response.data.error,};

  case 'SELECT_CURRENT_BUCKET_ID':
    return {
      ...state,
      currentBucketId: action.payload.id
    };

  case 'SELECT_ID':
    return {
      ...state,
      current_id: action.payload.id,
      currentBucketTitle: action.payload.title,
      currentBucketDescription: action.payload.description };

  case 'EDIT_BUCKET_FULFILLED':
    return {
      ...state,
      bucketlists: _.unionBy([action.payload.data], state.bucketlists, 'id'),
      bucketEditMessage: action.payload.data.message,
      editBucketStatus: action.payload.status
    };

  case 'EDIT_BUCKET_PENDING':
    return {
      ...state,
      loading: true,
      editBucketStatus: null,
      bucketEditMessage: null
    };

  case 'DELETE_BUCKET_FULFILLED': {
    const { id } = action.payload.data;
    const bucketlists = _.remove(state.bucketlists, bucket => bucket.id !== id);
    return { ...state,
      bucketlists,
      bucketDeleteMessage: action.payload.data.message ,
      isDeleteSuccess: true,
      deleteBucketStatus: action.payload.status
    };
  }

  case 'DELETE_BUCKET_PENDING':
    return {...state, loading: true};

  case 'DELETE_BUCKET_REJECTED':
    return {
      ...state,
      isDeleteSuccess:false,
      bucketError: action.payload.response.data.error
    };

  case 'SEARCH_BUCKET_FULFILLED':
    return {
      ...state,
      searchBuckets: action.payload.data.results,
      isSearch: true,
      bucketMessage: action.payload.data.message,
    };

  case 'DISABLE_IS_SEARCH':
    return {
      ...state,
      isSearch: false
    };
  case 'SEARCH_BUCKET_ITEM_FULFILLED':
    return {
      ...state,
      searchItems: action.payload.data,
      showSearchItem: true,
    };

  case 'SEARCH_BUCKET_REJECTED':
    return {
      ...state,
      isSearch: false,
      bucketError: action.payload.response.data.error
    };

  case 'SEARCH_CHANGE':
    return {
      ...state,
      isSearch: false
    };


  case 'GET_ITEMS_FULFILLED':
    return {
      ...state, items: action.payload.data.items,
      bucketMessage: action.payload.data.message
    };

  case 'CREATE_ITEM_FULFILLED':
    return {
      ...state,
      items: _.concat(state.items, action.payload.data),
      createBucketItemStatus: action.payload.status

    };

  case 'CREATE_ITEM_PENDING':
    return {
      ...state,
      loading: true,
      bucketItemsError: null,
      bucketItemsMessage: null,
      createBucketItemStatus: null,
    };

  case 'CREATE_ITEM_REJECTED':
    /* eslint-disable no-console */
    console.log('status ==== code', action.payload.response.status);
    /* eslint-enable no-console */
    return {
      ...state,
      bucketItemsError: action.payload.response.data.error,
      createBucketItemStatus: action.payload.response.status
    };

  case 'SELECT_ITEM_ID':
    return {
      ...state, current_item_id: action.payload
    };

  case 'EDIT_ITEM_FULFILLED':
    return {
      ...state,
      items: _.unionBy([action.payload.data], state.items, 'id'),
      isEditSuccess: true,
      EditBucketItemsMessage: 'Changes Saved'
    };
  case 'SHOW_ITEMS':
    return {
      ...state,
      showItems: true
    };

  case 'SET_SEARCH_ITEM':
    return {
      ...state,
      isSearchItem: true
    };

  case 'DISABLE_SEARCH_ITEM':
    return {
      ...state,
      isSearchItem: false
    };

  case 'DISABLE_SHOW_SEARCH_ITEMS':
    return {
      ...state,
      showSearchItem: false
    };

  case 'DISABLE_SEARCH_BUCKET':
    return {
      ...state,
      isSearch: false
    };

  case 'HIDE_ITEMS':
    return {
      ...state, showItems: false
    };

  case 'EDIT_ITEM_REJECTED':
    return {
      ...state,
      isEditSuccess: false,
      bucketItemsError: action.payload.response.data.error
    };

  case 'DELETE_ITEM_FULFILLED':{
    const { id } = action.payload.data;
    const items = _.remove(state.items, item => item.id !== id);
    return {
      ...state,
      items,
      DeleteBucketItemMessage: action.payload.data.message,
      deleteBucketItemStatus: action.payload.status
    };
  }

  case 'DELETE_ITEM_REJECTED':
    return {
      ...state,
      isDeleteSuccess:false,
      bucketItemsError: action.payload.response.data.error,
      deleteBucketItemStatus: null

    };
  case 'DELETE_ITEM_PENDING':
    return {
      ...state,
      loading: true,
      bucketItemsError: null,
      DeleteBucketItemMessage: null,
      deleteBucketItemStatus: null
    };

  case 'CLEAR_STATE':
    return {
      ...state = initialState
    };

  default:
    return state;
  }
};
