import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Number1=(props)=>{
    const [brand,setbrand]=useState(0)
    const [fruit,setFruit]=useState(0)
const onHandlePress=()=>{
   props.onSend({brand,fruit})
   //setFruit(fruit+1)
   setbrand(brand+1)
   setFruit(fruit+1)
   
}
const onHandlePress2=()=>{
    props.onSent2('BẤM onHandlePress2')
 }
    return (
        <View style={{}}>

        <TouchableOpacity onPress={onHandlePress} style={styles.btn}>
        <Text> Buttom </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHandlePress2} style={styles.btn}>
        <Text>Buttom 2</Text>
        </TouchableOpacity>
        <Text style={{fontSize:20}}>child:{props.name}</Text>
         
        </View>
    )
    
}

export default Number1

const styles = StyleSheet.create({
    btn:{
        width:100,height:100,
        marginTop:10,
        borderRadius:20,
        backgroundColor:"blue",
        justifyContent:"center",
        alignItems:'center'
    }
})
