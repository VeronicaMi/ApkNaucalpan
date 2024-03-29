import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput
} from 'react-native';
//import Encabezado from '../Secciones/Encabezado.js'
import RadioForm, { RadioButton } from 'react-native-simple-radio-button';


var DonanteOrganos = [
    {label: 'Si', value: 0 },
    {label: 'No', value: 1 }
  ];

export default class DatosMedicos extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            fichaMedica:{
                grupoSanguineo: '',
                alergias: '',
                enfermedadCronica: '',
                padecimiento: '',
                suministroMedico: '',
                peso: '',
                talla: '',
                donanteOrganos: '',
            }
        };
    };
    
   
    render(){
        return(
            <ScrollView>
                <View style = {styles.container}>
                    <Text style = {styles.label}> Grupo Sanguíneo </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'O +'
                            onChangeText = {(text) => {
                                const fichaMedica = this.state.fichaMedica;
                                fichaMedica.grupoSanguineo = text;
                                this.setState({...this.state, fichaMedica});
                            }}
                            value = {this.state.fichaMedica.grupoSanguineo}
                        />

                    <Text style = {styles.label}> Alergias </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Penicilina'
                            onChangeText = {(text) => {
                                const fichaMedica = this.state.fichaMedica;
                                fichaMedica.alergias = text;
                                this.setState({...this.state, fichaMedica});
                            }}
                            value = {this.state.fichaMedica.alergias}
                        />

                    <Text style = {styles.label}> Enfermedad Crónica </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Diabetes'
                            onChangeText = {(text) => {
                                const fichaMedica = this.state.fichaMedica;
                                fichaMedica.enfermedadCronica = text;
                                this.setState({...this.state, fichaMedica});
                            }}
                            value = {this.state.fichaMedica.enfermedadCronica}
                        />

                    <Text style = {styles.label}> Padecimientos </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'No se'
                            onChangeText = {(text) => {
                                const fichaMedica = this.state.fichaMedica;
                                fichaMedica.padecimiento = text;
                                this.setState({...this.state, fichaMedica});
                            }}
                            value = {this.state.fichaMedica.padecimiento}
                        />

                    <Text style = {styles.label}> Suministro de Medicamentos </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = 'Ninguno'
                            onChangeText = {(text) => {
                                const fichaMedica = this.state.fichaMedica;
                                fichaMedica.suministroMedico = text;
                                this.setState({...this.state, fichaMedica});
                            }}
                            value = {this.state.fichaMedica.suministroMedico}
                        />

                    <Text style = {styles.label}> Peso </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '50' 
                            keyboardType = 'numeric'
                            onChangeText = {(text) => {
                                const fichaMedica = this.state.fichaMedica;
                                fichaMedica.peso = text;
                                this.setState({...this.state, fichaMedica});
                            }}
                            value = {this.state.fichaMedica.peso}
                        />

                    <Text style = {styles.label}> Talla </Text>
                        <TextInput
                            style = {styles.input}
                            placeholder = '150'
                            keyboardType = 'numeric'
                            onChangeText = {(text) => {
                                const fichaMedica = this.state.fichaMedica;
                                fichaMedica.talla = text;
                                this.setState({...this.state, fichaMedica});
                            }}
                            value = {this.state.fichaMedica.talla}
                        />

                    <Text style = {styles.label}> Donante de Órganos </Text>
                        <RadioForm
                            style={styles.donante}
                            radio_props={DonanteOrganos}
                            initial={0}
                            formHorizontal={true}
                            labelHorizontal={true}
                            onPress={(value) => {
                                const fichaMedica = this.state.fichaMedica;
                                fichaMedica.donanteOrganos = value;
                                this.setState({...this.state, fichaMedica})
                            }}
                        />

                    <View style = {styles.button}>
                        <TouchableOpacity style = {styles.buttonStyle} 
                            onPress={() => alert('Hola')}>
                            <Text style = {styles.buttonText}>GUARDAR</Text>
                        </TouchableOpacity>
                    </View>
                    

                </View>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container:{
        flex: 1,

    },

    titulo:{
        fontSize: 28,
        justifyContent: 'center',
        paddingLeft: 30,
        margin: 5,
    },

    label:{
        marginTop: 25,
        fontSize: 18,
        paddingLeft: 20,
    },

    input:{
        margin:5,
        marginLeft: 25,
        borderBottomWidth: 2,
        borderBottomColor: '#803c3f',
        width: 310,
    },

    donante:{
        marginLeft: 10,
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-evenly'
    },

    button:{
        flex: 1,
        marginTop: 40,
        marginRight: 100,
        marginLeft: 100,
        alignItems: 'center',
        borderColor: '#803c3f',
        borderBottomWidth: 5,
        borderTopWidth: 5,
        backgroundColor: '#803c3f',
    },

    buttonStyle:{
        width: '80%',
        height: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    buttonText:{
        color: '#ffffff',
        fontSize: 24,
    },
});