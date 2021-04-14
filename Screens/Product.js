import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Homeproduce from '../Data/Homeproduce';
import CategoryFlatList from '../components/categoryFlatList';
import { Dimensions } from 'react-native';
import { useEffect } from 'react/cjs/react.development';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const Product = ({navigation, route}) => {
  const {id} = route.params;
useEffect(() => {
  navigation.setOptions({
    tabBarVisible: true
  });
}, [])
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
          }}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>SORT</Text>
            <Ionicons
              name="chevron-down-outline"
              size={23}
              color={'#000'}
              style={{marginTop: 3, marginLeft: 3}}
            />
          </View>
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
          <View style={{}}>
            <FlatList
              numColumns={2}
              data={Homeproduce}
              renderItem={({item}) => <CategoryFlatList item={item} id={id}/>}
              keyExtractor={item => item.id}
              key={Math.random()}
              

              
            />
          </View>
        </View>
      </View>
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
});
