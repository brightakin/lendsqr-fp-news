import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import NewsDetailsScreen from '../NewsDetails';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

interface State {
  news: {
    currentNews: {
      id: string;
      title: string;
      summary: string;
      author: string;
      publicationDate: string;
    };
  };
}

const initialState: State = {
  news: {
    currentNews: {
      id: '1',
      title: 'Test News 1',
      summary: 'Summary of Test News 1',
      author: 'Author 1',
      publicationDate: '2023-06-25',
    },
  },
};

const mockNavigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  state: {params: {}},
};

const renderComponent = (state: State = initialState) => {
  const store = mockStore(state);
  return render(
    <Provider store={store}>
      <NewsDetailsScreen navigation={mockNavigation} />
    </Provider>,
  );
};

describe('NewsDetailsScreen', () => {
  test('renders news details correctly', () => {
    const {getByText} = renderComponent();

    expect(getByText('Test News 1')).toBeTruthy();
    expect(getByText('Summary of Test News 1')).toBeTruthy();
    expect(getByText('Author 1')).toBeTruthy();
  });

  test('handles navigation correctly', () => {
    const {getByText} = renderComponent();

    fireEvent.press(getByText('Back'));
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });
});
