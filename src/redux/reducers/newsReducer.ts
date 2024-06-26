import {
  GET_NEWS_FAIL,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
} from '../../constants/newsConstants';

export const newsListReducer = (state = {}, action: any) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {loading: true};
    case GET_NEWS_SUCCESS:
      return {loading: false, newsData: action.payload};
    case GET_NEWS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
