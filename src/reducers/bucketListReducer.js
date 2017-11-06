import _ from 'lodash';

export const initialState = {
  bucketResponse: '',
  bucketlists: [],
  items: [],
  searchBuckets: [],
  showItems: false,
  isSearch: false,
  isCreateSuccess: false,
  isGetSuccess: false,
  loading: false,
  current_id: null,
  current_item_id: null,
  bucketEditMessage: null,
  bucketError: null,
  bucketMessage: 'created successfully',
  bucketItemsError: null,
  bucketItemsMessage: null
};


export default (state = initialState, action) => {
  switch (action.type) {
  case 'CREATE_BUCKET_FULFILLED':
    return {
      ...state,
      bucketlists: _.concat(state.bucketlists, action.payload.data),
      bucketMessage: action.payload.data.message,
      isCreateSuccess: true,
    };

  case 'CREATE_BUCKET_PENDING':
    return {
      ...state, 
      loading: true,
    };

  case 'CREATE_BUCKET_REJECTED':
    return {
      ...state,
      bucketError: action.payload.response.data.error,
      isCreateSuccess: false
    };

  case 'GET_BUCKETS_FULFILLED':
    return { 
      ...state, 
      bucketlists: action.payload.data.buckets ,
      bucketItemsMessage: action.payload.data.message};

  case 'GET_BUCKETS_PENDING':
    return {
      ...state, loading: true};

  case 'GET_BUCKETS_REJECTED':
    return {
      ...state, 
      bucketError: action.payload.response.data.error,};

  case 'SELECT_ID':
    return {
      ...state, current_id: action.payload};

  case 'EDIT_BUCKET_FULFILLED':
    return {
      ...state,
      bucketlists: _.unionBy([action.payload.data], state.bucketlists, 'id'),
      isEditSuccess: true,
      bucketEditMessage: 'Changes Saved!'
    };

  case 'EDIT_BUCKET_PENDING':
    return {
      ...state, 
      loading: true
    };

  case 'EDIT_BUCKET_REJECTED':
    return {
      ...state,
      isEditSuccess: false,
      bucketError: action.payload.response.data.error,
    };


  case 'DELETE_BUCKET_FULFILLED': {
    const { id } = action.payload.data;
    const bucketlists = _.remove(state.bucketlists, bucket => bucket.id !== id);
    return { ...state, 
      bucketlists, 
      bucketMessage: action.payload.data.message ,
      isDeleteSuccess: true}; }

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
      bucketItemsMessage: action.payload.data.message
    };

  case 'CREATE_ITEM-_REJECTED':
    return {
      ...state, 
      bucketItemsError: action.payload.response.data.error
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
      bucketItemsMessage: action.payload.data.message
    };
  case 'SHOW_ITEMS':
    return {
      ...state,
      showItems: true
    };

  case 'HIDE_ITEMS':
    return {
      ...state, showItems: false
    };

  case 'EDIT_ITEM_REJECTED':
    return {
      ...state, 
      isEditSuccess: false,
      bucketItemsError: action.payload.data.message
    };

  case 'DELETE_ITEM_FULFILLED':{
    const { id } = action.payload.data;
    const items = _.remove(state.items, item => item.id !== id);
    return {...state, items};
  }

  case 'DELETE_ITEM_REJECTED':
    return {
      ...state,
      isDeleteSuccess:false, 
      bucketItemsError: action.payload.response.data.error
    };

  case 'CLEAR_STATE':
    return {
      ...state = initialState
    };

  default:
    return state;
  }
};
