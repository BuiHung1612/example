import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Login from './Screens/Login'
import Product from './Screens/Product'
import AppStack from './Navigation/AppStack'
import Test from './Screens/Test'
import Register from './Screens/Register'
import TestNavi from './Navigation/test'
export default class App extends Component {
  render() {
    return (
      <AppStack/>
    )
  }
}

const styles = StyleSheet.create({})
