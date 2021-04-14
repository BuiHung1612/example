import React from 'react'
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import HomeImg from '../Data/HomeImg'
import ImgFooter from '../Data/ImgFooter'
import { Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Home = () => {
  const Header=()=>{
    return(
       <View style={styles.TextSpecial}>
        <Text style={{textDecorationLine:'underline',fontWeight:'bold',color:'#bdbdbd'}} >All Special Offers(11)</Text>
      </View> 
    )
  }
  const Footer=()=>{
    return(
    <View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <Text style={styles.footerText}>Shop the 'Gram</Text>
        <Text style={{width:'92%',textAlign:'center',fontSize:16}}>Upload your favorite F21 outfit on Instagram with #Forever21Men for a chance to be featured</Text>
        <View style={{flexDirection:'row'}}>
          <Entypo name="camera" size={16} color={"#000"} style={{top:8,marginRight:5}} />
          <Text style={{fontSize:20,fontWeight:'bold',marginRight:5}}>@</Text>
          <Text style={{fontSize:20,fontWeight:'bold'}}>Forever21Men</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',width:435,flexWrap:'wrap-reverse',justifyContent:'center',alignItems:'center'}}>
        {
          ImgFooter.map((e,i)=>{
            return(
              <View key={e.id} style={{margin:10}}>
              <Image source={{uri:e.url}} style={{width:190,height:190}} />
              </View>
            )
          })
        }
      </View>
      <TouchableOpacity style={styles.btnfooter}>
        <Text style={{fontSize:16,fontWeight:'bold'}}>View more</Text>
      </TouchableOpacity>
    </View>
    )

  }
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    {/* top */}
      <View style={styles.header}>
      <TouchableOpacity style={{width:'10%'}}>
      <AntDesign name="menuunfold" size={30} color={"#848484"} />
      </TouchableOpacity>
      <View style={{width:'90%'}}>
      <Text style={{fontSize:27,fontWeight:'bold',paddingLeft:110}}>FOREVER 21</Text>
      </View>
     
      </View>
 {/* search */}
      <View style={styles.search}>
     
      <View style={{width:"97%",paddingTop:2}}>
      <View style={styles.input}>
      <TextInput placeholder={"Search"} placeholderTextColor="#000" style={{fontSize:17,paddingLeft:50,width:'100%',height:'95%'}} />
      </View>
      <Ionicons name='search' size={25} color={"#000"} style={{position:'absolute',top:17,left:16}}/>
      <View style={styles.iconinput}>
      <Ionicons name='mic' size={25} color={"#000"}  />
      <Ionicons name='barcode-sharp' size={25} color={"#000"} style={{marginLeft:20}} />
      </View>
      </View>

      </View>

      
      <View style={styles.FlImg}>
      
      
        <FlatList
        ListFooterComponent={Footer}
        ListHeaderComponent={Header}
          data={HomeImg}
          renderItem={({item})=>{
            return(
              <TouchableOpacity style={{marginTop:10,marginBottom:10}} onPress={() => navigation.navigate('Product',{id:item.id})} >
              <Image source={{uri:item.url}} style={{width:'100%',height:230}} resizeMode="cover"  />
              </TouchableOpacity>
            )
          }}
          
          //key={Math.random()}
        />

          

      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  header:{
    flex:0.08,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:10,
    borderBottomWidth:0.5,
    backgroundColor:'#fff',
    borderBottomColor:'#bdbdbd'
  },
  search:{
    flex:0.09,
    justifyContent:'center',
    alignItems:'center',
  },
  input:{
    backgroundColor:'#E6E6E6',
    justifyContent:'center',
    alignItems:'center'

  },
  iconinput:{
    position:'absolute',
    right:30,
    paddingTop:17,
    flexDirection:'row'
  },
  TextSpecial:{
    flex:0.04,
    justifyContent:'center',
    alignItems:'center',
    
  },
  FlImg:{
    flex:0.82,
   
  },
  footerText:{
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center'
  },
  btnfooter:{
    width:90,
    height:35,
    backgroundColor:"#bdbdbd",
    justifyContent:'center',
    alignItems:'center',
    left:'40%'
  }
})
