import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
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

const Bottom=createBottomTabNavigator();
const Stack=createStackNavigator();

const BottomTab = () => {
    return (
        <NavigationContainer>
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
                {/* <Bottom.Screen name="Home" component={Home} options={{}}/> */}
                <Bottom.Screen name="AppStack" component={AppStack}/>
                <Bottom.Screen name="Wistlist" component={Wistlist}/>
                <Bottom.Screen name="Cart" component={Cart}/>
                <Bottom.Screen name="Me" component={Me}/>

            </Bottom.Navigator>
            </NavigationContainer>
    )
}


const AppStack=()=>{
    return (
        
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Product" component={Product} options={{headerShown:false}} />
                <Stack.Screen name="Detail" component={Detail} options={{headerShown:false}} />
                
            </Stack.Navigator>
        
    )
}


export default BottomTab

const styles = StyleSheet.create({})
