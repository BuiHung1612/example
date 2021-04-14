import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Screens/Home';
import Wistlist from '../Screens/Wistlist';
import Cart from '../Screens/Cart';
import Me from '../Screens/Me';

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Product from '../Screens/Product';
import Detail from '../Screens/Detail';
import Register from '../Screens/Register';
import Login from '../Screens/Login';
const Drawer=createDrawerNavigator();
const TestNavi = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="Login" component={Login}/>
                <Drawer.Screen name="Register" component={Register}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default TestNavi

const styles = StyleSheet.create({})
