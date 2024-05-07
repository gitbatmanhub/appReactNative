import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {FontAwesome} from "@expo/vector-icons";
import {Button} from "@rneui/themed";



const Dashboard = () => {
    const search = ()=>{
        console.log('Buscando...');
    }
    const updateSearch = ()=>{
        console.log('Actualizando...');
    }
    const [searchValue, setSearchValue] = useState('');
    const username = 'Usuario';
    return (
        <View style={styles.container}>
            <View >
                <Text style={styles.title}>¡Bienvenido {username}!</Text>
                <FontAwesome name="user" size={24} color="black" style={styles.icon}/>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff', // Cambia el color de fondo según sea necesario
    },

    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 70,
        marginHorizontal: 20,
        alignItems: 'flex-start',

    },
    searchbar: {
        width: '100%',
    },
});

export default Dashboard;
