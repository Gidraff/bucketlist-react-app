import _ from "lodash";

export const initialState = {
  bucketResponse: "",
  bucketlists: [],
  items: [],
  searchBuckets: [],
  isSearch: false,
  isCreateSuccess: false,
  loading: false,
  current_id: null,
  current_item_id: null,
  error: null,
  message: "",
};


export default (state = initialState, action) => {
  switch (action.type) {
  case "CREATE_BUCKET_FULFILLED":
    return {
      ...state,
      bucketlists: _.concat(state.bucketlists, action.payload.data),
      isCreateSuccess: true
    };

  case "CREATE_BUCKET_PENDING":
    return {
      ...state, 
      loading: true,
      error: null,
      message:""
    };

  case "CREATE_BUCKET_REJECTED":
    return {
      ...state,
      error: action.payload.response.data.error,
      isCreateSuccess: false
    };

  case "GET_BUCKETS_FULFILLED":
    return { ...state, bucketlists: action.payload.data.buckets };

  case "GET_BUCKETS_PENDING":
    return {
      ...state, loading: true,
    };

  case "GET_BUCKETS_REJECTED":
    return {
      ...state, message: action.payload.response,
    };

  case "SELECT_ID":
    return {
      ...state, current_id: action.payload,
    };

  case "EDIT_BUCKET_FULFILLED":
    return {
      ...state,
      bucketlists: _.unionBy([action.payload.data], state.bucketlists, "id"),
    };

  case "EDIT_BUCKET_PENDING":
    return {
      ...state, loading: true,
    };


  case "DELETE_BUCKET_FULFILLED": {
    const { id } = action.payload.data;
    const bucketlists = _.remove(state.bucketlists, bucket => bucket.id !== id);
    return { ...state, bucketlists, message: action.payload.data.message }; }

  case "DELETE_BUCKET_PENDING":
    return {
      ...state, loading: true,
    };

  case "DELETE_BUCKET_REJECTED":
    return {
      ...state, error: action.payload.response.data.error,
    };


  case "SEARCH_BUCKET_FULFILLED":
    return {
      ...state, 
      searchBuckets: action.payload.data.results,
      isSearch: true
    };

  case "SEARCH_BUCKET_REJECTED":
    return {
      ...state,
      isSearch: false
    };

  case "SEARCH_CHANGE":
    return {
      ...state,
      isSearch: false
    };


  case "GET_ITEMS_FULFILLED":
    return {
      ...state, items: action.payload.data.items
    };

  case "CREATE_ITEM_FULFILLED":
    return {
      ...state, items: _.concat(state.items, action.payload.data)
    };

  case "SELECT_ITEM_ID":
    return {
      ...state, current_item_id: action.payload
    };

  case "EDIT_ITEM_FULFILLED":
    return {
      ...state,
      items: _.unionBy([action.payload.data], state.items, "id")
    };

  case "DELETE_ITEM_FULFILLED":{
    const { id } = action.payload.data;
    const items = _.remove(state.items, item => item.id !== id);
    return {...state, items};
  }

  default:
    return state;
  }
};
