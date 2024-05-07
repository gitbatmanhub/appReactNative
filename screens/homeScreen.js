
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button} from '@rneui/themed';
import grupoMediLinkLogo from '../assets/img/grupoMediLinkLogo.png';


const HomeScreen = ({navigation}) => {
    const goToLogin = () => {
        navigation.navigate('Ingresar');
    }
    const goToRegister = () => {
        navigation.navigate('Registrarse');
    }
    return (
        <View style={styles.container}>
                <Image style={styles.image} source={grupoMediLinkLogo}/>
            <View style={styles.textView}>
            <Text style={styles.textWelcomeTitle}>¡Comencemos!</Text>
                <Text style={styles.textWelcomeSubtitle}>Descubre nuestra app para agendar consultas y ver resultados médicos. ¡Inicia sesión ahora y mantén tu bienestar en tus manos!</Text>
            </View>
            <Button
                title="Iniciar Sesión"
                buttonStyle={styles.buttonLogin}
                containerStyle={styles.containerStyle}
                titleStyle={styles.titleLogin}
                onPress={goToLogin}
            />
            {/*<Button
                title="Registrarse" type="outline"
                buttonStyle={styles.buttonRegister}
                containerStyle={styles.containerStyle}
                titleStyle={styles.titleRegister}
                onPress={goToRegister}
            />*/}

        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        resizeMode: 'contain',
        width: 300,
        alignContent: 'center',
    },
    buttonLogin: {
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#000000',
        borderColor: '#000000',
    },
    buttonRegister: {
        borderWidth: 2,
        borderColor: '#223265',
        borderRadius: 10,

    },
    titleLogin: {
        color: '#ffffff',

    },
    titleRegister: {
        color: '#223265',
    },
    containerStyle: {
        width: '90%',
        marginHorizontal: 50,
        marginVertical: 10,
    },
    textWelcomeTitle: {
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        color: '#223265',
    },
    textWelcomeSubtitle: {
        fontSize: 18,
        color: '#223265',
        textAlign: 'center',
    },
    textView: {
        marginHorizontal: 30,
        marginVertical: 30,
    },

});

export default HomeScreen;
