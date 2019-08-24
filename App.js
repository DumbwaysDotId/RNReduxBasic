import React from 'react';
import { Provider } from 'react-redux';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import store from './src/_redux/store';
import Welcome from './src/screens/Welcome';
import Users from './src/screens/Users';

const RootNavigation = createAppContainer(
  createBottomTabNavigator({
    Welcome: {
      screen: Welcome
    },
    Users : {
      screen: Users
    }
  })
)


const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}

export default App;