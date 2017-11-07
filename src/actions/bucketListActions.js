import { actionTypes } from '../constants/actionsTypes';
import instance from '../configs/axiosConfigs';

export function createBucket({ title, description }) {
  return {
    type: actionTypes.CREATE_BUCKET,
    payload: instance.post('bucketlists/', { title, description }),
  };
}

export function getBuckets() {
  return {
    type: 'GET_BUCKETS',
    payload: instance.get('bucketlists/'),
  };
}

export function editBucket(id, { title, description }) {
  return {
    type: 'EDIT_BUCKET',
    payload: instance.put(`/bucketlists/${id}`, { title, description })
  };
}

export function deleteBucket(id) {
  return {
    type: 'DELETE_BUCKET',
    payload: instance.delete(`/bucketlists/${id}`)
  };
}

export function selectId(id) {
  return {
    type: 'SELECT_ID',
    payload: id
  };
}

export function getItems(id) {
  return {
    type: 'GET_ITEMS',
    payload: instance.get(`/bucketlists/${id}/items`)
  };
}

export function createItem(id, {item, status}) {
  return {
    type: 'CREATE_ITEM',
    payload: instance.post(`/bucketlists/${id}/items`, {item, status})
  };
}

export function selectItemId(id){
  return {
    type: 'SELECT_ITEM_ID',
    payload:id
  };
}

export function editItem(bucket_id, id, {item, status}) {
  return {
    type: 'EDIT_ITEM',
    payload: instance.put(`/bucketlists/${bucket_id}/items/${id}`, {item, status})
  };
}

export function deleteItem(bucket_id, id) {
  return {
    type: 'DELETE_ITEM',
    payload: instance.delete(`/bucketlists/${bucket_id}/items/${id}`)
  };
}

export function searchBucket(searchData) {
  return {
    type: 'SEARCH_BUCKET',
    payload: instance.get(`/bucketlists/?q=${searchData}` )
  };
}

export function searchBucketItems(id, searchData){
  return {
    type: 'SEARCH_BUCKET_ITEM',
    payload: instance.get(`bucketlists/${id}/items/?q=${searchData}`)
  };
}


export function searchChange() {
  return {
    type: 'SEARCH_CHANGE'
  };
}

export function showItems(){
  return {
    type: 'SHOW_ITEMS',
  };
}

export function hideItems(){
  return {
    type: 'HIDE_ITEMS'
  };
}
export function disableIsSearchItem(){
  return {
    type: 'DISABLE_IS_SEARCH_ITEM'
  };
}

export function disableIsSearch(){
  return {
    type: 'DISABLE_IS_SEARCH'
  };
}

export function disableShowSearchItems(){
  return {
    type: 'DISABLE_SHOW_SEARCH_ITEMS'
  };
}

export function setSearchItem(){
  return {
    type: 'SET_SEARCH_ITEM'
  };
}

export function disableSearchItem(){
  return {
    type: 'DISABLE_SEARCH_ITEM'
  };
}

export function disableSearchBucket(){
  return {
    type: 'DISABLE_SEARCH_BUCKET'
  };
}

export function clearState(){
  return {
    type: 'CLEAR_STATE'
  };
}