import React, {useState} from 'react';
import {View, TextInput, StyleSheet, TouchableOpacity, Text, Alert} from 'react-native';
import {FontAwesome} from '@expo/vector-icons'; // Asegúrate de instalar la librería @expo/vector-icons
import {Button} from '@rneui/themed';

const Login = ({navigation}) => {

    const goToDashBoard = () => {
        navigation.navigate('Dashboard');
    }
    const goToRegister = () => {
        navigation.navigate('Registrarse');
    }
    const [username, setUsername] = useState('');
    const [pass, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const handleLogin = async () => {
        try {
            // Alert.alert('Iniciar Sesión', `Usuario: ${username} Contraseña: ${pass}`);
            const body = {
                query: `
                    mutation Login($loginInput: LoginCliUsuarioInputDto!) {
                        login(loginInput: $loginInput) {
                        user{
                        cod_usuario,
                        email,
                        },
                        access_token,
                    }
                }`,
                variables: {
                    loginInput: {
                        username: username,
                        pass: pass,
                    },
                },
            };

            const response = await fetch('http://192.168.25.203:3000/graphql', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            const data = await response.json();
            if (response.ok) {
                if (data.data && data.data.login) {
                    Alert.alert('Bienvenido Nuevamente', 'Recuerda que desde esta app puedes hacer muchas cosas');
                    navigation.navigate('Dashboard');
                } else {
                    Alert.alert('Por favor Revisa tus Credenciales', 'Contraseña incorrecta o usuario no encontrado');
                }
            } else {
                throw new Error('Error al procesar la solicitud');
            }
        } catch (error) {
            console.log(error);
        }

    };

    return (
        <View style={styles.container}>
            <View style={styles.textsHeadersContent}>
                <Text style={styles.textTittle}>Bienvenido de Nuevo</Text>
                <Text style={styles.textSubtittle}>Ingresa tu usuario para continuar</Text>


            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name="user" size={24} color="black" style={styles.icon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Usuario"
                    onChangeText={setUsername}
                    value={username}
                />
            </View>
            <View style={styles.inputContainer}>
                <FontAwesome name="lock" size={24} color="black" style={styles.icon}/>
                <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={pass}
                />
            </View>
            <View>
                <Text style={styles.textDisclaimer}>Al continuar aceptas nuestras politicas de seguridad y nuestro
                    tratamiendo de la información</Text>
            </View>

            <Button
                style={styles.buttonLogin}
                buttonStyle={{backgroundColor: 'rgba(39, 39, 39, 1)'}}
                containerStyle={styles.containerStyle}
                title="Iniciar Sesión"
                onPress={handleLogin}
            />
            <TouchableOpacity onPress={() => console.log('Olvidaste tu contraseña?')}>
                <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    textsHeadersContent: {
        alignItems: 'center',
        margin: 20,
    },
    textTittle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    textSubtittle: {
        fontSize: 15,
        color: '#4a4f57',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#4a4f57',
        borderRadius: 10,
        marginBottom: 10,
        width: '90%',
    },
    textDisclaimer: {
        fontSize: 12,
        color: '#4a4f57',
        marginVertical: 10,
        textAlign: 'left',
    },
    input: {
        flex: 1,
        height: 45,
        paddingHorizontal: 10,
    },
    icon: {
        paddingHorizontal: 10,
    },
    checkboxContainer: {
        textAlign: 'right',
        alignItems: 'right',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginLeft: 10,

    },
    forgotPassword: {
        fontSize: 16,
        margin: 20,
        color: '#507db9',
        textDecorationLine: 'underline',
    },
    loginButton: {
        borderWidth: 2,
        borderRadius: 20,
        paddingHorizontal: 50,
        paddingVertical: 10,
    },
    loginButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    containerStyle: {
        width: '90%',
        borderRadius: 10,
        marginHorizontal: 50,
        marginVertical: 10,
    },
    buttonLogin: {
        width: '100%',
        borderRadius: 10,
    },
    buttonStyle: {
        backgroundColor: '#000000',
    },
});

export default Login;
