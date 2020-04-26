import React from 'react';
import App from './App';
import { render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { Provider } from 'react-redux'
import store from './store'

it('renders without crashing', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
