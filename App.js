import React from 'react';
import { Provider } from 'react-redux';

import store from './src/_redux/store';
import Welcome from './src/screens/Welcome';

const App = () => {
  return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  )
}

export default App;