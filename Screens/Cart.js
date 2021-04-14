import React, {useState, useEffect, useCallback} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  RefreshControl,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cartdata from '../Data/dataCart';
import Homeproduce from '../Data/Homeproduce';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Cart = ({navigation}) => {
  //const [total,setTotal]=useState(0)

  const [refresh, setRefresh] = useState(false);
  const onRefresh = useCallback(() => {
    setRefresh(true);
    wait(1000).then(() => setRefresh(false));
  }, []);
  let total = 0;
  let numberItem = 0;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons
            name="arrow-back"
            size={30}
            color={'#000'}
            style={{left: 10}}
          />
        </TouchableOpacity>

        {Cartdata.map(e =>
          Homeproduce.map(a => {
            if (a.id == e.id) {
              numberItem++;
              total += a.price;
              //setnumberItem(numberItem+1)
              // setTotal(total+a.price)
            }
          }),
        )}
        <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
          CART
        </Text>
      </View>
      <View style={styles.itemtotal}>
        <Text style={{fontWeight: 'bold', fontSize: 16, color: '#848484'}}>
          {numberItem} Item(s):Total(excluding delivery)
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{total}$</Text>
      </View>
      <ScrollView
        style={{height: windowHeight * 0.0001}}
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }>
        {
          Cartdata.length!=0?Cartdata.map(e =>Homeproduce.map(a => {
             if (a.id == e.id)
              return (
                <View style={styles.boxproduct} key={a.id}>
                  <Image source={{uri: a.imgurl}} style={styles.imageproduct} />
                  <View
                    style={{
                      paddingLeft: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: '62%',
                    }}>
                    <View>
                      <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                        {a.price}$
                      </Text>
                      <Text
                        style={{fontSize: 15, color: '#848484', marginTop: 10}}>
                        {a.subtitle}
                      </Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                      <TouchableOpacity>
                        <Ionicons
                          name="ellipsis-vertical"
                          size={30}
                          color="#000"
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              );


            
          }),
        ):
        
                <View style={{height: 400}}>
                  <View style={styles.cartEmpty}>
                    <Image
                      source={{
                        uri:
                          'https://cdn.iconscout.com/icon/premium/png-256-thumb/empty-cart-2685174-2232751.png',
                      }}
                      style={{
                        width: '85%',
                        height: '85%',
                        resizeMode: 'contain',
                      }}
                    />
                    <Text style={{fontWeight: 'bold', fontSize: 19}}>
                      YOUR CART IS EMPTY
                    </Text>
                  </View>
                  <View style={styles.ShopNow}>
                    <TouchableOpacity style={styles.btnshopnow}>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#fff',
                          fontWeight: 'bold',
                        }}>
                        SHOP NOW
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              
            } 
        
        
        <View></View>

        <View style={{flex: 0.07, height: windowHeight * 0.07}}>
          <View style={styles.divider}></View>
        </View>
        <View style={styles.saveforlater}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            SAVE FOR LATER (0)
          </Text>
        </View>
        <View style={styles.itemSaved}>
          <Text>There are no items in save for later </Text>
        </View>
      </ScrollView>
      <View style={styles.checkout}>
        <TouchableOpacity style={styles.checkoutbtn}>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>PayMent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: windowHeight * 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 0.08,
    height: windowHeight * 0.08,
    borderBottomWidth: 0.4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemtotal: {
    flex: 0.08,
    height: windowHeight * 0.08,
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartEmpty: {
    flex: 0.25,
    height: windowHeight * 0.25,
    alignItems: 'center',
  },
  ShopNow: {
    flex: 0.08,
    height: windowHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    top: 30,
  },
  btnshopnow: {
    width: 300,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  divider: {
    height: 17,
    backgroundColor: '#F2F2F2',
    marginTop: 30,
  },
  saveforlater: {
    flex: 0.08,
    height: windowHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.4,
  },
  itemSaved: {
    flex: 0.29,
    height: windowHeight * 0.29,
    borderTopColor: 0.5,
    paddingTop: 10,
    alignItems: 'center',
    borderBottomWidth: 0.5,
  },
  checkout: {
    flex: 0.09,
    height: windowHeight * 0.09,
    bottom: windowHeight * 0.005,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutbtn: {
    backgroundColor: 'yellow',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
  },
  boxproduct: {
    width: '100%',
    height: windowHeight * 0.32,
    paddingTop: 20,
    left: 20,
    borderBottomWidth: 0.6,
    borderBottomColor: '#bdbdbd',
    flexDirection: 'row',
  },
  imageproduct: {
    width: 130,
    height: windowHeight * 0.25,
  },
});
