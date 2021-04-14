import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {useNavigation} from '@react-navigation/native';

const CategoryFlatList = props => {
  const navigation = useNavigation();
  const [heart, setHeart] = useState(false);
  const onclick=()=>{
    navigation.setParams({tabBarVisible:true})
    console.log('123')
  }
  return (
    <View style={{height: 400, width: '45%', marginTop: 10, marginLeft: 10}}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail', {id: props.item.id})}>
        <Image
          source={{uri: props.item.imgurl}}
          style={{width: 190, height: 290}}
        />
      </TouchableOpacity>
      <View style={styles.product}>
        <Text style={styles.textproduct}>đ{props.item.price}</Text>
        <TouchableOpacity style={{right: 25}} onPress={() => onclick()}>
          <Ionicons
            name={heart ? 'heart' : 'heart-outline'}
            size={25}
            color={heart ? 'red' : '#000'}
          />
        </TouchableOpacity>
      </View>

      <Text style={{fontSize: 15, color: '#848484', left: 15}}>
        {props.item.subtitle}
      </Text>
    </View>
  );
};

//return props.item.id==props.id?
//return props.item.type==props.id?
export default CategoryFlatList;

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
});
