import React from 'react'
import { ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import BntData from '../Data/btnData'
const Me = () => {
    return (
    <View style={styles.container}>
        <ScrollView>
        <View style={styles.header}>
            <Text style={{fontSize:20,fontWeight:'bold',marginLeft:20}}>MY ACCOUNT</Text>
            <Ionicons name="settings" size={30} color={"#000"} style={{right:20}}  />
        </View>
        <View style={styles.username}>
            <Text style={{fontSize:17,fontWeight:'bold'}}>Hello,Hung</Text>
        </View>
        <View style={{flex:1}}>
            {
                BntData.map((e,i)=>{
                    return(
                      <TouchableOpacity style={styles.btn} key={e.id}>
                      <View>
                      <Text style={styles.title}>{e.title}</Text>
                        <Text style={styles.subtitle}>{e.subtitle}</Text>
                      </View>
                      <View>
                          <Ionicons name="chevron-forward-outline" size={23} color={'#000'} />
                      </View>
                        
                      </TouchableOpacity>  
                    )
                })
            }
            <TouchableOpacity style={styles.btn1}>
            <View>
            <Text style={styles.title}>NOTIFICATIONS</Text>
            <Text style={styles.subtitle}>View events and promotions</Text>
            </View>
            <View>
                <Ionicons name="chevron-forward-outline" size={23} color={'#000'} />
            </View>
            
            </TouchableOpacity>  
            <TouchableOpacity style={styles.btn}>
            <View>
            <Text style={styles.title}>HELP & SUPPORT</Text>
            <Text style={styles.subtitle}></Text>
            </View>
            <View>
                <Ionicons name="chevron-forward-outline" size={23} color={'#000'} />
            </View>
            
            </TouchableOpacity>  
        </View>
        
            
        
        
        </ScrollView>
        
        </View>
    )
}

export default Me

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        flex:0.08,
        paddingTop:15,
        paddingBottom:15,
        borderBottomWidth:0.4,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    username:{
        flex:0.08,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:'#f2f2f2',
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        flex:0.1,
        borderBottomWidth:0.3,
        borderBottomColor:'#e6e6e6',
        
       paddingTop:20,
       paddingBottom:20,
       paddingRight:20,
       left:20,
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    btn1:{
        flex:0.12,
        borderBottomWidth:10,
        borderTopWidth:10,
        borderTopColor:'#e6e6e6',
        borderBottomColor:'#e6e6e6',
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:20,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:15
    },
    title:{
        fontSize:17,
        fontWeight:'800'
    },
    subtitle:{
        color:'#848484'
    }
})
