import React, {Component} from 'react';
import { StyleSheet, View, Text, Alert, 
    Picker, TextInput } from 'react-native';
import OpcionEmergencia from './OpcionEmergencia.js'
import {createStackNavigator} from 'react-navigation-stack';
import Chat from './Chat.js';

class EmergenciaPolicialView extends Component{ 
    state = {PolicialEmer: '' }

    updatePolicialEmer = (opcion) => {
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
                            onValueChange = {()=> this.updatePolicialEmer(this.state.emergencia.opcion)}>
                            <Picker.Item label = 'Robo' value = 'robo'/>
                            <Picker.Item label = 'Secuestro' value = 'secuestro'/>
                            <Picker.Item label = 'Disparo de arma' value = 'disparo'/>
                            <Picker.Item label = 'Violencia Familiar' value = 'violenciaFamiliar'/>
                            <Picker.Item label = 'Abuso sexual' value = 'abusoSexual'/>
                            <Picker.Item label = 'Homicidio' value = 'homicidio'/>
                            <Picker.Item label = 'Allanamiento de morada' value = 'allanamientoMorada'/>
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

const EmergenciaPolicial = createStackNavigator({
    EmergenciaPolicialView:EmergenciaPolicialView, 
    Chat: Chat,
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   });

export default EmergenciaPolicial;

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