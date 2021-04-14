import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import Homeproduce from '../Data/Homeproduce';
import {Dimensions} from 'react-native';
import Addtocart from '../components/addtocart';
import Cart from '../Data/dataCart';
import Home from './Home';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Detail = ({navigation, route}) => {
  const [heart, setheart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const {id} = route.params;
  const onclickHeart = () => {
    setheart(!heart);
  };
  const addtocart = () => {
    Cart.push({id: id});
    console.log(Cart.map(a => a));
  };

  const toggleModal=()=>{
    setShowModal(!showModal)
  }


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity
            style={{left: 10}}
            onPress={() => navigation.navigate('Product',{id:id})}>
            <Ionicons name="arrow-back" size={30} color={'#000'} />
          </TouchableOpacity>

          <Text
            style={{
              textDecorationLine: 'underline',
              textDecorationColor: '#000',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
            }}>
            FOREVER 21 {JSON.stringify(id)}
          </Text>
          <AntDesign
            name="upload"
            size={23}
            color={'#000'}
            style={{right: 15}}
          />
        </View>
        <View style={{flex: 0.75, height: windowHeight * 0.7}}>
          <Swiper
            autoplay
            autoplayTimeout={3}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}>
            {Homeproduce.filter(e => e.id == id).map(e =>
              e.imgdetail.map(a => {
                if (a.id == 1) {
                  return (
                    <View key={a.id} style={{width: '100%'}}>
                      <Image source={{uri: a.img}} style={styles.img} />
                    </View>
                  );
                }
              }),
            )}
            {Homeproduce.filter(e => e.id == id).map(e =>
              e.imgdetail.map(a => {
                if (a.id == 2) {
                  return (
                    <View key={a.id} style={{width: '100%'}}>
                      <Image source={{uri: a.img}} style={styles.img} />
                    </View>
                  );
                }
              }),
            )}
            {Homeproduce.filter(e => e.id == id).map(e =>
              e.imgdetail.map(a => {
                if (a.id == 3) {
                  return (
                    <View key={a.id} style={{width: '100%'}}>
                      <Image source={{uri: a.img}} style={styles.img} />
                    </View>
                  );
                }
              }),
            )}
          </Swiper>
        </View>
        {/* image */}
        <View style={styles.pricebox}>
          {Homeproduce.map(e => {
            if (e.id == id) {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingTop: 5,
                  }}
                  key={e.id}>
                  <View key={e.id}>
                    <Text style={styles.price}>{e.price}$</Text>
                    <Text style={styles.productname}>{e.subtitle}</Text>
                  </View>

                  <View style={{flexDirection: 'row'}}>
                    <Ionicons name="star" size={23} color={'yellow'} />
                    <Ionicons name="star" size={23} color={'yellow'} />
                    <Ionicons name="star" size={23} color={'yellow'} />
                    <Ionicons name="star" size={23} color={'yellow'} />
                    <Ionicons name="star" size={23} color={'yellow'} />

                    <Text
                      style={{fontSize: 16, color: '#848484', top: 1, left: 2}}>
                      ({e.type})
                    </Text>
                  </View>
                </View>
              );
            }
          })}
        </View>
        <View style={{flex: 0.1}}>
          <View style={styles.infomationbox}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#2E2E2E'}}>
              Product infomation
            </Text>
          </View>
          <View style={styles.detail}>
            <Text style={{fontSize: 17, fontWeight: 'bold'}}>Details</Text>
            <Text style={{fontSize: 15, paddingLeft: 10, marginTop: 10}}>
              {Homeproduce.map(e => e.detail)}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.boxbtn}>
        <View style={styles.imgshopbox}>
        <TouchableOpacity onPress={()=>toggleModal()}>
          <View style={styles.imgshop}>
            
            <Image
              source={{
                uri:
                  'http://www.hauteinstinct.com/wp-content/uploads/2018/11/DSC00245-1080x1620.jpg',
              }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 25,
                borderColor: '#fff',
                borderWidth: 1,
              }}
            />
           
          </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.addtocart} onPress={() => addtocart()}>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: '#fff'}}>
            ADD TO CART
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.heart} onPress={onclickHeart}>
          <Ionicons
            name={heart ? 'heart' : 'heart-outline'}
            size={40}
            color={heart ? 'red' : '#000'}
          />
        </TouchableOpacity>
      </View>
      {/* <View style={styles.boxbtn}>
        <Addtocart id={id}/>
      </View> */}
      <Modal animationType={'slide'} visible={showModal} onRequestClose={()=>toggleModal()} transparent onDismiss={()=>toggleModal()}>
        <TouchableOpacity style={{flex:1,justifyContent:'flex-end'}} onPress={()=>toggleModal()} activeOpacity={1} >
        <TouchableOpacity style={styles.modalView} activeOpacity={1} >
         {
           Homeproduce.map((e)=>{
             if(e.id==id){
               return(
                 <View key={e.id} style={{top:10,}}>
                 <Text style={{fontSize:17,fontWeight:'bold',left:10,top:10}}>F21 Shoop</Text>
                 <View style={[styles.imgshopbox,{marginTop:10,}]}>
                 <View style={{height:51,width:51,backgroundColor:'black', borderRadius:100,justifyContent:'center',alignItems:'center'}}>
                 <Image source={{uri:e.imgurl}} style={styles.imgshop1}  />
                 </View>
                 </View>
                 <View style={{width:windowWidth*0.5,justifyContent:'space-around',height:70,top:10,left:10,flexDirection:'row'}}>
                  <TouchableOpacity style={styles.btnsize}>
                    <Text style={styles.textsize}>S</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnsize}>
                    <Text style={styles.textsize}>M</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnsize}>
                    <Text style={styles.textsize}>L</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btnsize}>
                    <Text style={styles.textsize}>XL</Text>
                  </TouchableOpacity>
                 </View>
                 <View style={{flexDirection:'row'}}>
                 <TouchableOpacity style={styles.addtocart1} onPress={() => addtocart()}>
                  <Text style={{fontSize: 17, fontWeight: 'bold', color: '#fff'}}>
                    ADD TO CART
                  </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.heart1} onPress={onclickHeart}>
          <Ionicons
            name={heart ? 'heart' : 'heart-outline'}
            size={40}
            color={heart ? 'red' : '#000'}
          />
        </TouchableOpacity>
                  </View>
                 </View>
               )
             }
           })
         }
         </TouchableOpacity>
        </TouchableOpacity>
        
      </Modal>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.08,
    height: windowHeight * 0.07,
    flexDirection: 'row',

    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: '#BDBDBD',
    justifyContent: 'space-between',
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginLeft: 5,
    marginRight: 5,
    bottom: 50,
    borderWidth: 1,
    borderColor: '#fff',
  },
  activeDot: {
    backgroundColor: '#000',
    width: 15,
    height: 15,
    borderRadius: 8,
    marginLeft: 8,
    marginRight: 5,
    borderWidth: 1,
    borderColor: '#fff',
    bottom: 50,
  },
  pricebox: {
    flex: 0.1,
    height: 80,
    borderBottomWidth: 10,
    borderBottomColor: '#bdbdbd',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productname: {
    fontSize: 17,
    fontWeight: '600',
    color: '#848484',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  infomationbox: {
    height: 55,
    paddingLeft: 10,
    paddingTop: 10,
    borderBottomWidth: 0.5,
  },
  detail: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  addtocart: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 55,
 
    backgroundColor: '#000',
  },
  addtocart1: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: 55,
    left:90,
    top:20,
    backgroundColor: '#000',
  },
  heart: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart1: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    left:90,
    top:20

  },
  boxbtn: {
    width: windowWidth,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgshopbox: {
    width: '20%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgshop: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    borderWidth: 4,
    borderColor: '#000',
  },
  imgshop1: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 28,
    borderWidth: 3,
    borderColor: '#fff',
  },

  modalView: {
    width:'100%',
    height:280,
   
    backgroundColor: "#fff",
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  btnsize:{
    backgroundColor:'#fff',
    borderWidth:3,
    borderColor:'#bdbdbd',
    width:40,
    height:40,
    left:10,
    justifyContent:'center',
    alignItems:'center'
  },
  textsize:{
    fontSize:18,
    fontWeight:'bold',
    color:'#000'
  }

});
