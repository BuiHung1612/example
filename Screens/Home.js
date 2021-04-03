import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Homeproduce from '../Data/Homeproduce';

const RenderFlatlist = item => {
    return(
        <View style={{marginLeft:10}}>
                  <Image
                    source={{uri: item.imgurl}}
                    style={{width: 190, height: 250}}
                  />
                  <Text style={{fontSize: 40}}>{item.price}</Text>
                </View>
    )
};
const numColumns=2;
const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={30}
          color={'#000'}
          style={{left: -90}}
        />
        <Text
          style={{
            textDecorationLine: 'underline',
            textDecorationColor: '#000',
            fontSize: 20,
            fontWeight: 'bold',
            marginLeft: 30,
          }}>
          Vacation Ready
        </Text>
        <Ionicons
          name="chevron-down-outline"
          size={23}
          color={'#000'}
          style={{marginTop: 3, marginLeft: 3}}
        />
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
        <View style={{marginTop:15,marginBottom:10}}>
            <Text style={{fontSize:16,color:"#585858",fontWeight:"bold",textAlign:'center'}}> 405 styles</Text>
        </View>
        <View style={{marginTop:10,marginLeft:10}}>
        <FlatList
          numColumns={numColumns}
          horizontal={false}
            data={Homeproduce}
            renderItem={({item}) => RenderFlatlist(item) }
            
            keyExtractor={item => item.id}
          />
        </View>
         
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.1,

    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderColor: '#BDBDBD',
  },
  center: {
    flex: 0.9,
  },
});
