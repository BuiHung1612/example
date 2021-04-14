import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
export default class Login extends Component {
  state = {
    saw: true,
    check: true,
  };
  render() {
    return (
      <View style={styles.container}>
        {/* view text signin & x */}
        <View style={{flexDirection: 'row', paddingTop: 15, paddingBottom: 10}}>
          <Text style={styles.title}>SIGN IN</Text>
          <TouchableOpacity>
            <Ionicons
              name="close"
              size={30}
              color={'#000000'}
              style={{marginLeft: 110, marginTop: 2}}
            />
          </TouchableOpacity>
        </View>

        {/* divider */}
        <View style={styles.divider} />
        {/* email */}
        <View style={{width: '90%', margin: 20}}>
          <View style={{marginTop: 25}}>
            <Text style={styles.text}>EMAIL ADDRESS</Text>
            <TextInput
              placeholder="Enter your Email"
              keyboardType="email-address"
              style={styles.input}
            />
          </View>

          {/* Password */}
          <View style={{marginTop: 20}}>
            <Text style={styles.text}>PASSWORD</Text>
            <TextInput
              placeholder="Enter your Password"
              style={styles.input}
              secureTextEntry={this.state.saw}
            />
            <TouchableOpacity
              style={{position: 'absolute', right: 15, top: 45}}
              onPress={() => this.setState({saw: !this.state.saw})}>
              <Ionicons
                name={this.state.saw ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color={'#585858'}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Remember me */}
        <View style={{flexDirection: 'row', marginLeft: 20}}>
          <TouchableOpacity
            onPress={() => this.setState({check: !this.state.check})}
            style={styles.check}>
            <Entypo
              name="check"
              size={21}
              color={this.state.check ? '#000' : '#fff'}
              style={{position: 'absolute', left: 0, top: 0}}
            />
          </TouchableOpacity>

          <Text
            style={{
              marginLeft: 10,
              marginTop: 3,
              fontSize: 15,
              fontWeight: '500',
            }}>
            Remember me
          </Text>
        </View>
        {/* btn signin,forgot pass */}
        <View>
          <TouchableOpacity style={styles.btnsignin}>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                fontWeight: '300',
                marginTop: 20,
                left: '40%',
                textDecorationLine: 'underline',
                color: '#A4A4A4',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>

          <View
            style={{height: 0.5, marginTop: 30, backgroundColor: '#F2F2F2'}}
          />
          <TouchableOpacity style={{left: '36%', top: '13%'}}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#000',
                textDecorationLine: 'underline',
              }}>
              Don't have an Account ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 170,
  },
  divider: {
    height: 0.5,
    backgroundColor: '#D8D8D8',
  },
  input: {
    borderWidth: 1,
    marginTop: 8,
    height: 55,
    paddingLeft: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: '800',
    color: '#848484',
  },
  btnsignin: {
    width: '90%',
    margin: 20,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  check: {
    width: 23,
    height: 23,
    borderWidth: 1,
    borderColor: '#6E6E6E',
  },
});
