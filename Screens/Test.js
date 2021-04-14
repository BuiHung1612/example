import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Dimensions} from 'react-native';
import Test2 from '../Test2';
import { set } from 'react-native-reanimated';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Number2 = props => {
  const [num, setNum] = useState(0);
  const [fathernum, setfanum] = useState(0);
  const [click,setclick]=useState(1)
  const [display,setDisplay]=useState("hello")
  const Show = item => {
    setNum(item.brand + item.fruit);
  };
  useEffect(()=>{
      console.log(display)
      if(display=="hello")
      setDisplay('hI')
      
  },[click])
  // [] kiểm tra nếu k có gì bên trong thì sẽ gọi luôn 
  const Onclick=()=>{
    setclick(1)
  }
  return (
    <View style={{flex: 1}}>
      <Text>xin chao </Text>

      <Test2 onSend={Show} name={num} />
      {/* <Text style={{fontSize:20}}> father:{fathernum}</Text> */}
      <TouchableOpacity onPress={Onclick}>
        <Text>CLICK</Text>
       <Text>{display}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Number2;

const styles = StyleSheet.create({});
