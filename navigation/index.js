import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

import SignInScreen from '../screens/SignInScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LobbyScreen from '../screens/LobbyScreen';
import GameScreen from '../screens/GameScreen';
import CreateTableScreen from '../screens/CreateTableScreen';

let LobbyNavigation = createStackNavigator({
  lobby: LobbyScreen,
  game: GameScreen,
  gameCreate: CreateTableScreen
});

export default createBottomTabNavigator(
  {
    signin: SignInScreen,
    register: RegisterScreen,
    lobbyNavigation: LobbyNavigation
  },
  {
    navigationOptions: {
      tabBarVisible: true
    },
    lazy: true
  }
);
