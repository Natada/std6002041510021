/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
//import App from './components/App';
import {name as appName} from './app.json';
//import App from './components/App';
import About from './components/About';
import Login from '.component/Login';

const MainNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Profile: {screen: AboutScreen},
  });

  const App = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => About);