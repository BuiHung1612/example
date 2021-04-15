import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

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

const Bottom=createBottomTabNavigator();
const Stack=createStackNavigator();
const Drawer=createDrawerNavigator();

const DrawTab=()=>{
    return(
        <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Register" component={Register}/>
        </Stack.Navigator>
    )
}

const BottomTab = () => {
    return (
            <Bottom.Navigator initialRouteName="AppStack" screenOptions={({route})=>({
                tabBarIcon:({focused,color})=>{
                    let iconName;
                    if(route.name==="AppStack"){
                        iconName="home-outline"

                        return <Ionicons name={iconName} size={25} color={focused?"#000":"#848484"}/>
                    }
                    else if(route.name==="Wistlist"){
                        iconName="heart-outline"
                        return <Ionicons name={iconName} size={25} color={focused?"#000":"#848484"}/>
                    }
                    else if(route.name==="Cart"){
                        iconName="cart-outline"
                        return <Ionicons name={iconName} size={25} color={focused?"#000":"#848484"}/>
                    }
                    else if(route.name==="Me"){
                        iconName="person-outline"
                        return <Ionicons name={iconName} size={25} color={focused?"#000":"#848484"}/>
                    }
                    
                },
                
            })}
        
            >
                
                <Bottom.Screen name="AppStack" component={AppStack}/>
                <Bottom.Screen name="Wistlist" component={Wistlist}/>
                <Bottom.Screen name="Cart" component={Cart}/>
                <Bottom.Screen name="Me" component={Me}/>

            </Bottom.Navigator>
           
    )
}


const AppStack=()=>{
    return (
        
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Product" component={Product} options={{headerShown:false}} />
                <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}} />
                <Stack.Screen name="Drawer" component={DrawTab} options={{headerShown:false}} />
                
            </Stack.Navigator>
        
    )
}

const MyNavigator=()=>{
    return(
        <NavigationContainer>
            <Drawer.Navigator>
            <Drawer.Screen name="BottomTab" component={BottomTab}/>
            <Drawer.Screen name="DrawTab" component={DrawTab}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

export default MyNavigator

const styles = StyleSheet.create({})
