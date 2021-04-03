import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Login from './Screens/Login'
import AppStack from './Navigation/AppStack'
export default class App extends Component {
  render() {
    return (
      <AppStack/>
    )
  }
}

const styles = StyleSheet.create({})
