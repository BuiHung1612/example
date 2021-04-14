import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Wistlist = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize:20,fontWeight:'bold',marginLeft:10}}>WISHLIST</Text>
            </View>
            <View style={styles.numItem}>
                <Text style={styles.text}>0 Item(s)</Text>
            </View>
            <View style={styles.ImgEmpty}>
                <Image source={{uri:'https://i.pinimg.com/originals/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.png'}} style={{width:'100%',height:'100%',resizeMode:'cover'}} />
              
            </View>
            <View style={styles.ShopNow}>
                <TouchableOpacity style={styles.btnshopnow}>
                    <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>SHOP NOW</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Wistlist

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    header:{
        flex:0.08,
        borderBottomWidth:0.4,
        justifyContent:'center'
    },
    numItem:{
        flex:0.06,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f2f2f2'
    },
    ImgEmpty:{
        flex:0.33,
         alignItems:'center',
    },
    ShopNow:{
        flex:0.08,
        justifyContent:'center',
        alignItems:'center',
        paddingTop:10


    },
    btnshopnow:{
        width:300,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000'
    }
})
