import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../Screens/Home';
import Wistlist from '../Screens/Wistlist';
import Cart from '../Screens/Cart';
import Me from '../Screens/Me';

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Bottom=createBottomTabNavigator();

const AppStack = () => {
    return (
        <NavigationContainer>
            <Bottom.Navigator initialRouteName="Home" screenOptions={({route})=>({
                tabBarIcon:({focused,color})=>{
                    let iconName;
                    if(route.name==="Home"){
                        iconName=focused?"home-outline":"home"

                        return <Ionicons name={iconName} size={25} color={"#000"}/>
                    }
                    else if(route.name==="Wistlist"){
                        iconName=focused?"heart-outline":"heart"
                        return <Ionicons name={iconName} size={25} color={"#000"}/>
                    }
                    else if(route.name==="Cart"){
                        iconName=focused?"cart-outline":"cart"
                        return <Ionicons name={iconName} size={25} color={"#000"}/>
                    }
                    else if(route.name==="Me"){
                        iconName=focused?"person-outline":"person"
                        return <Ionicons name={iconName} size={25} color={"#000"}/>
                    }
                    
                   

                }
            })}>
                <Bottom.Screen name="Home" component={Home}/>
                <Bottom.Screen name="Wistlist" component={Wistlist}/>
                <Bottom.Screen name="Cart" component={Cart}/>
                <Bottom.Screen name="Me" component={Me}/>
            </Bottom.Navigator>
        </NavigationContainer>
    )
}

export default AppStack

const styles = StyleSheet.create({})
