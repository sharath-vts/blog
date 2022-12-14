import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/contexts/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import React from 'react';
import BlogDetails from './src/screens/BlogDetails';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';

const navigator = createStackNavigator({
  IndexScreen: IndexScreen,
  BlogDetails: BlogDetails,
  CreateScreen: CreateScreen,
  EditScreen: EditScreen
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