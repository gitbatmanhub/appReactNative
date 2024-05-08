import React, {useState} from 'react';
import {FontAwesome} from "@expo/vector-icons";
import {Button} from "@rneui/themed";
import {
    Dimensions,
    Text,
    View,
    ImageBackground,
    Animated,
    SafeAreaView,
    StatusBar,
    TextInput,
    ScrollView
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import image1 from '../../assets/banner/1.jpg'
import image2 from '../../assets/banner/2.jpg'
import image3 from '../../assets/banner/3.jpg'
import * as Icon from 'react-native-feather';
import {theme} from "../../themes/theme";
import Categories from "../../components/categories";
import Especialidades from "../../components/categories";
import FeaturedRow from "../../components/featuredRow";


const Dashboard = () => {
    const width = Dimensions.get('window').width;
    const search = () => {
        console.log('Buscando...');
    }
    const updateSearch = () => {
        console.log('Actualizando...');
    }
    const images = [{image1}, {image2}, {image3}];
    const [searchValue, setSearchValue] = useState('');
    const username = 'Usuario';


    const featured = [
        { title: 'Servicios', sucursales: 'Sucursal 1', description: 'Descripción 1' },
        { title: 'Acciones', sucursales: 'Sucursal 3', description: 'Descripción 2' },
        { title: 'Sucursales', sucursales: 'Sucursal 5', description: 'Descripción 3' }
    ];
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content"/>
            {/* Search bar*/}
            <View className="flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex-row flex-1 items-center p-2 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray"/>
                    <TextInput
                        placeholder="Buscar"
                        onChangeText={setSearchValue}
                        value={searchValue}
                        className="flex-1 p-2"/>
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" className="text-gray-600"/>
                        <Text className="text-gray-600">Sucursales</Text>
                    </View>
                </View>

                <View style={{backgroundColor: theme.bgColor(1)}} className="p-3 rounded-full">
                    <Icon.Sliders height="20" width="20" strokeWidth={2.5} stroke="white"/>
                </View>
            </View>
            {/* Main */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20
                }}
            >
                {/* Categories */}
                <Especialidades/>
                {/*Featured*/}
                <View className="mt-4">
                    {
                        featured.map((item, index) => {
                            return (
                                <FeaturedRow
                                    key={index}
                                    title={item.title}
                                    description={item.sucursales}
                                />
                            )
                        })
                    }

                </View>


            </ScrollView>

        </SafeAreaView>
    );
};


export default Dashboard;
