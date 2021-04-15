import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Homeproduce from '../Data/Homeproduce';
import DataSort from '../Data/DataSort';
import CategoryFlatList from '../components/categoryFlatList';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Product = ({navigation, route}) => {
  const {id} = route.params;
  const [onShowModal,setonShowModal]=useState(false)
  const [itemSort,setItemSort]=useState(id)
  const toggleModal=()=>{
    setonShowModal(!onShowModal)
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={{left: 10}}
          onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back" size={30} color={'#000'} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', left: 100}}>
          <Text
            style={{
              textDecorationLine: 'underline',
              textDecorationColor: '#000',
              fontSize: 20,
              fontWeight: 'bold',
              marginLeft: 20,
            }}>
            Vacation Ready {JSON.stringify(id)}
          </Text>
          <Ionicons
            name="chevron-down-outline"
            size={23}
            color={'#000'}
            style={{marginTop: 3, marginLeft: 3}}
          />
        </View>
      </View>

      <View style={styles.center}>
        <View
          style={{
            flexDirection: 'row',
            flex: 0.08,
            alignItems: 'center',
            justifyContent: 'space-around',
            borderBottomWidth:0.5,
            borderColor:'#BDBDBD'
          }}>
          <TouchableOpacity style={{flexDirection: 'row'}} onPress={()=>toggleModal()}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>SORT</Text>
            
            <Ionicons
              name="chevron-down-outline"
              size={23}
              color={'#000'}
              style={{marginTop: 0, marginLeft: 3}}
            />
            
            
          </TouchableOpacity>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>REFIND</Text>
        </View>

        <View style={{flex: 0.92}}>
          <View style={{marginTop: 15, marginBottom: 10}}>
            <Text
              style={{
                fontSize: 16,
                color: '#585858',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {' '}
              405 styles
            </Text>
          </View>
          <View>
            <FlatList
              numColumns={4}
              data={Homeproduce}
              renderItem={({item}) =>{
                if(itemSort==item.type)
                return <CategoryFlatList item={item} id={id} sort={itemSort}/>
              } }      
              keyExtractor={item => item.id}
              key={Math.random()}
              

              
            />
          </View>
        </View>
      </View>
      <Modal animationType="none" visible={onShowModal} transparent >
        <TouchableOpacity style={styles.ModalView} activeOpacity={1} onPress={()=>toggleModal()}>
          <TouchableOpacity style={styles.ModalBox}>
              <View style={styles.modalItem}>
                {
                  DataSort.map((e)=>{
                    return(
                      <TouchableOpacity style={styles.btnItemSort} onPress={()=>setItemSort(e.id)} key={e.id}>
                        <Text style={styles.TextitemSort}>{e.title}</Text>
                      </TouchableOpacity>
                    )
                  })
                }
              </View>
          </TouchableOpacity>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.1,

    flexDirection: 'row',

    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: '#BDBDBD',
  },
  center: {
    flex: 0.9,
  },
  product: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 15,
    marginTop: 8,
  },
  textproduct: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ModalView:{
    flex:1,
    opacity:1,
    alignItems:'center'
  },
  ModalBox:{
    width:"90%",
    height:295,
    top:140,
    backgroundColor:'#fff'
  },
  modalItem:{
    padding:25
  },
  btnItemSort:{
    paddingTop:15,
    paddingBottom:15,
    borderBottomWidth:0.4,
    borderColor:'#E0E0E0'
  },
  TextitemSort:{
    fontSize:17
  }
});
