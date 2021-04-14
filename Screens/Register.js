import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RadioButton,Checkbox} from 'react-native-paper';
import { set } from 'react-native-reanimated';
const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [date, setdate] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [value, setValue] = React.useState('first');
  const [english, setEnglish] = React.useState('first');
  const [checkbox, setCheckBox] = React.useState(false);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.text}>FIRST NAME</Text>
          <TextInput
            onChangeText={text => setFirstName(text)}
            value={firstName}
            style={styles.input}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>LAST NAME</Text>
          <TextInput
            onChangeText={text => setLastName(text)}
            value={lastName}
            style={styles.input}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>DATE OF BIRTH</Text>
          <TextInput
            onChangeText={text => setdate(text)}
            value={date}
            style={styles.input}
          />
        </View>
        <View style={[styles.box]}>
        <Text style={styles.text}>GENDER</Text>
    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
     <View style={{flexDirection:'row',width:'100%'}}>
      <View style={{flexDirection:'row'}} >
        
        <RadioButton value="first" color="#000"/>
        <Text style={styles.radiotext}>Female</Text>
      </View>
      <View style={{flexDirection:'row',marginLeft:100}}>
       
        <RadioButton value="second" color="#000" />
        <Text style={styles.radiotext}> Male</Text>
      </View>
      </View>
    </RadioButton.Group>
          
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>PHONE NUMBER</Text>
          <TextInput
            onChangeText={text => setPhone(text)}
            value={phone}
            style={styles.input}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>EMAIL ADDRESS</Text>
          <TextInput
            onChangeText={text => setEmail(text)}
            value={email}
            style={styles.input}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>CONFIRM EMAIL ADDRESS</Text>
          <TextInput
            onChangeText={text => setPassword(text)}
            value={password}
            style={styles.input}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>PASSWORD</Text>
          <TextInput
            onChangeText={text => setConfirmPassword(text)}
            value={confirmPassword}
            style={styles.input}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.text}>CONFIRM PASSWORD</Text>
          <TextInput
            onChangeText={text => setFirstName(text)}
            value={firstName}
            style={styles.input}
          />
        </View>
        <View style={styles.optionbox}>
          <View style={{height:30,flexDirection:'row',justifyContent:'space-around'}}>
            <View style={styles.divider}/>
            <Text style={{fontSize:17,fontWeight:'bold',color:"#949494"}}>(Optional)</Text>
            <View style={styles.divider}/>
          </View>
          <Text style={{color:'#969696',fontSize:17,fontWeight:'bold'}}>PREFERRED EMAIL LANGUAGE</Text>
          <RadioButton.Group onValueChange={newValue => setEnglish(newValue)} value={english}>
     <View style={{flexDirection:'row',width:'100%'}}>
      <View style={{flexDirection:'row'}} >
        
        <RadioButton value="first" color="#000"/>
        <Text style={styles.radiotext}>english</Text>
      </View>
      <View style={{flexDirection:'row',marginLeft:100}}>
       
        <RadioButton value="second" color="#000" />
        <Text style={styles.radiotext}> spanish</Text>
      </View>
      </View>
    </RadioButton.Group>

    <View style={{flexDirection:'row',top:5}}>
    <Checkbox
      status={checkbox ? 'checked' : 'unchecked'}
      onPress={() => {
        setCheckBox(!checkbox);
      }}
    />
    <Text style={{fontSize:16,top:7}}>Please sign me up to the latest fashion news &
    exclusive offers (we won't spam or sell your email... and
    you can unsubscribe at any time!)
    </Text>
    </View>
    
        </View>
        <View style={{marginTop:20}}>
          <TouchableOpacity style={styles.createaccount}>
            <Text style={{fontSize:16,fontWeight:'bold'}}>CREATE ACCOUNT</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',width:'95%',flexWrap:'wrap',marginTop:10,paddingBottom:20}}>
          <Text>By clicking 'CREATE ACCOUNT', I accept the </Text>
          <Text style={{textDecorationLine:'underline',fontSize:15,fontWeight:'bold'}}>Privacy Policy </Text>
          <Text>and </Text>
          <Text style={{textDecorationLine:'underline',fontSize:15,fontWeight:'bold'}}>Terms & Conditions</Text>
          </View>
          
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 20,
    borderTopColor: '#bdbdbd',
    backgroundColor:'#fff',
    paddingTop:15,
    paddingLeft:15,
    paddingRight:15
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#989898',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#989898',
    paddingBottom: 3,
  },
  box: {
    height: 90,
    width: '100%',
  },
  radiotext:{
      fontSize:17,
      fontWeight:'bold',
      color:'#000',
      top:6
      
  },
  optionbox:{
    height:200,
    backgroundColor:'#F5F5F5',
    padding:15
  },
  divider:{
    height:0.5,
    backgroundColor:'#969696',
    width:'35%',
    top:13
  },
  createaccount:{
    width:'99%',
    height:55,
    backgroundColor:'yellow',
    justifyContent:'center',
    alignItems:'center'
  }
});
