import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import medicine from '../assets/iconsCategories/medicine.png';

export default function Especialidades() {
    const [especialidades, setEspecialidades] = useState([]);
    const [activeEspecialidad, setActiveEspecialidad] = useState(null);

    useEffect(() => {
        const obtenerEspecialidades = async () => {
            try {
                const body = {
                    query: `
                        {
                            getAllServiciosGrupos {
                                cod_grupo,
                                grupo_nombre
                            }
                        }
                    `
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
                    if (data.data && data.data.getAllServiciosGrupos) {
                        setEspecialidades(data.data.getAllServiciosGrupos);
                    } else {
                        throw new Error('Error al procesar la solicitud');
                    }
                } else {
                    throw new Error('Error al procesar la solicitud');
                }
            } catch (error) {
                console.log(error);
            }
        };

        obtenerEspecialidades();
    }, []);

    return (
        <View style={{ marginTop: 20 }}>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {
                    especialidades.map(({cod_grupo, grupo_nombre}, index) => {
                        let isActive = cod_grupo === activeEspecialidad;
                        let btnClass = isActive ? 'bg-blue-500' : 'bg-gray-200';
                        let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';
                        return (
                            <View key={index} style={{ marginRight: 6 }}>
                                <TouchableOpacity
                                    onPress={() => setActiveEspecialidad(cod_grupo)}
                                    className={"p-1 rounded-full shadow bg-gray-200" + btnClass} >
                                    <Image style={{ width: 45, height: 45 }} source={medicine} />
                                </TouchableOpacity>
                                <Text className={"text-sm "+textClass}>{grupo_nombre}</Text>
                            </View>
                        );
                    })
                }
            </ScrollView>
        </View>
    );
}
