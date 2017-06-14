import {
  StackNavigator,
} from 'react-navigation';

import Chat from '../components/eachchat'

import Home from '../components/threeTabs'

const App = StackNavigator({
  Home: {screen: Home},
  Chat: {screen: Chat},
});

export default App;