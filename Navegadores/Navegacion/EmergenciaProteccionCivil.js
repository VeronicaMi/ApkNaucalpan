//This is an example of Tab inside Navigation Drawer in React Native//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Alert, 
    Picker, TextInput } from 'react-native';
// import all basic components
import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation-stack';
import Chat from './Chat.js';

class EmergenciaProteccionCivilView extends Component{
    state = {ProtecCivilEmer: '' }

    updateProtecCivilEmer = (opcion) => {
        const emergencia = this.state.emergencia
        emergencia.opcion = opcion
        this.setState({...this.state, emergencia})
    }
    
    constructor(props){
        super(props);
       this.state = {
            emergencia:{
                opcion: '',
                otro: '',
            }
        };
    };

  render(){
        return(
            <View style = {styles.container}>

            <Text style = {styles.label}>Tipo de emergencia</Text>

                    <Picker 
                            style = {styles.tipoEmergencia}
                            selectedValue = {this.state.emergencia.opcion} 
                            onValueChange = {()=> this.updateProtecCivilEmer(this.state.emergencia.opcion)}>
                            <Picker.Item label = 'Incendio' value = 'incendio'/>
                            <Picker.Item label = 'Explosión' value = 'explosion'/>
                            <Picker.Item label = 'Derrumbe' value = 'derrumbe'/>
                            <Picker.Item label = 'Inundación' value = 'inundacion'/>
                            <Picker.Item label = 'Erupción Volcánica' value = 'erupcionVolcanica'/>
                            <Picker.Item label = 'Enjambre de abejas' value = 'enjambreAbejas'/>
                    </Picker>

                <Text style = {styles.label}>Otro</Text>

                <TextInput
                style = {styles.input}
                placeholder = 'Especifique'
                onChangeText = {(text) => {
                    const emergencia = this.state.emergencia;
                    emergencia.otro = text;
                    this.setState({...this.state, emergencia});
                }}
                value = {this.state.emergencia.otro}
                />

                <OpcionEmergencia
                onPressChat={() => this.props.navigation.navigate('Chat')}
                />
            </View>
        );
    }
};

const EmergenciaProteccionCivil = createStackNavigator({
    EmergenciaProteccionCivilView:EmergenciaProteccionCivilView, 
    Chat: Chat,
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   });

export default EmergenciaProteccionCivil;

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    label:{
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 20,
    },

    tipoEmergencia:{
        
        marginLeft: 36,
        fontSize: 18,
        
    },

    input:{
        margin:5,
        marginLeft: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#803c3f',
        width: 310,
    },

});