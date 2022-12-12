import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProvider } from './src/contexts/BlogContext';
import IndexScreen from './src/screens/IndexScreen';

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
  return <BlogProvider>
    <App />
  </BlogProvider>
}