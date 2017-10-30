import { combineReducers } from "redux";
import BucketReducer from "./bucketListReducer";
import UserReducer from "./authenticationReducer";


const rootReducer = combineReducers({
  auth: UserReducer,
  buckets: BucketReducer
});

export default rootReducer;
