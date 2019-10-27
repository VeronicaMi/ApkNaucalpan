import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';
import Chat from './Chat.js';
import Camara from './Camera/Camara.js';

const StackNavChat = createStackNavigator({
    Chat: Chat,
    Camara: Camara,
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }

});

const StackChat = createAppContainer(StackNavChat);

export default StackChat;
