import axios from 'axios';
import {
  GET_NEWS_FAIL,
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
} from '../../constants/newsConstants';

export const baseUrl = 'https://admin.zenfipay.com/api';

export const getNews = () => async (dispatch: any) => {
  try {
    dispatch({
      type: GET_NEWS_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .get(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=4e1e0bf03911400aa33fce601bfa5618',
        config,
      )
      .then(res => {
        let data = res.data;

        dispatch({
          type: GET_NEWS_SUCCESS,
          payload: data.articles,
        });
      });
  } catch (error: any) {
    dispatch({
      type: GET_NEWS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
