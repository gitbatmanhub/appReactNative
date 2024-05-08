import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
const Stack = createStackNavigator();
import {View, Text} from "react-native";
import React from "react";
import Example from "./screens/homeScreen";
import ProfileScreen from "./screens/profileScreen";
import Login from "./screens/auth/login";
import Register from "./screens/auth/register";
import Dashboard from "./screens/dashboard/dashboard";

export default function Navigation() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Example}  options={{headerShown: false}}/>
              <Stack.Screen name="Profile" component={ProfileScreen} />
              <Stack.Screen name="Ingresar" component={Login} />
              <Stack.Screen name="Registrarse" component={Register} />
              <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: false}}/>
              {/* Agrega más pantallas aquí */}
          </Stack.Navigator>
      </NavigationContainer>
  );
}
