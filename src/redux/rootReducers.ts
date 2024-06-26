import {combineReducers} from 'redux';
import auth from './slices/auth/authSlice';
import {newsListReducer} from './reducers/newsReducer';

export default combineReducers<any>({
  auth,
  newsList: newsListReducer,
});
