import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/contexts/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react';
const navigator = createStackNavigator({
  IndexScreen: IndexScreen
},{
  initialRouteName: 'IndexScreen',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})

const App = createAppContainer(navigator)

export default () => {
  return <Provider>
    <App />
  </Provider>
}