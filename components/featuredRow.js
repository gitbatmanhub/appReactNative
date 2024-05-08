import {View, Text, TouchableOpacity, ScrollView} from "react-native";
import React from "react";
import {theme} from "../themes/theme";

export default function FeaturedRow({title, description, sucursales}) {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-gray-500 text-xs">
                        {description}
                    </Text>
                    <Text className="font-bold text-lg">{sucursales}</Text>

                </View>
                <TouchableOpacity>
                    <Text style={{color: theme.text}} className="font-semibold">Ver más</Text>
                </TouchableOpacity>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15
                }}
                className="overflow-visible py-5"
                >


                </ScrollView>
            </View>
        </View>
    )
}