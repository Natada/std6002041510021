/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';1
import {name as appName} from './app.json';
import App from './component/App';

AppRegistry.registerComponent(appName, () => App);
