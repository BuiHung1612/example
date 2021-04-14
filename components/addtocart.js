import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper'
import Homeproduce from '../Data/Homeproduce'
import Cart from '../Data/dataCart'
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Addtocart = (props) => {
    const [heart,setheart]=useState(false)

    const onclickHeart=()=>{
        setheart(!heart)
    
      }
      const addtocart=()=>{
          const {id}=props.id;
          Cart.push({id:id,name:'hung'})
        console.log(Cart.map(a=>a))
        
      }
    return (
        <View style={styles.boxbtn}>
        <View style={styles.imgshopbox}>
        <View style={styles.imgshop}>
          <Image source={{uri:"http://www.hauteinstinct.com/wp-content/uploads/2018/11/DSC00245-1080x1620.jpg"}} style={{width:40,height:40,borderRadius:25,borderColor:'#fff',borderWidth:1}}/>
        </View>
        </View>
       
        <TouchableOpacity style={styles.addtocart} onPress={addtocart}>
          <Text style={{fontSize:17,fontWeight:'bold',color:'#fff'}}>ADD TO CART</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.heart} onPress={onclickHeart}>
          <Ionicons name={heart?"heart":"heart-outline"} size={40} color= {heart?"red":"#000"} />
        </TouchableOpacity>
      </View>
    )
}

export default Addtocart

const styles = StyleSheet.create({
    addtocart:{
        justifyContent:'center',
        alignItems:'center',
        width:'60%',
        height:55,
        backgroundColor:'#000'
    
      },
      heart:{
        width:'20%',
        justifyContent:'center',
        alignItems:'center'
      },
boxbtn:{
    width:windowWidth,
    height:windowHeight*0.1,
    flexDirection:'row',
    alignItems:'center'
  
  },
  imgshopbox:{
    width:'20%',
    height:55,
    justifyContent:'center',
    alignItems:'center'
  },
  imgshop:{
    width:45,
    height:45,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:28,
    borderWidth:4,
    borderColor:'#000'
  }
  });
