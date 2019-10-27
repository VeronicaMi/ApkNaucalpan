import Meteor, {
    withTracker,
    ReactiveDict,
    Accounts,
    MeteorListView,
  } from "react-native-meteor";

export default class Conexion {

};

export function connect () {
    /** Connect to server.*/
  Meteor.connect("ws://10.0.0.14:3000/websocket");

}