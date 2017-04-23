import React, { Component } from 'react'
import { StyleSheet, View, TouchableHighlight, Image, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

const X = require('../images/button/x.png')
const Y = require('../images/button/y.png')
const Z = require('../images/button/z.png')
const Zminus = require('../images/button/z-.png')

export default class PageOne extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.container3}>

        {/* Z */}
          <TouchableHighlight style={styles.btn} onPress={Actions.pop}>
            <Image
              style={styles.xyz}
              source={Zminus}
            />
          </TouchableHighlight>

        {/* Y */}
          <TouchableHighlight style={styles.btn} onPress={Actions.pageTwoY}>
            <Image
              style={styles.xyz}
              source={Y}
            />
          </TouchableHighlight>

        {/* X */}
          <TouchableHighlight style={styles.btn} onPress={Actions.pageTwoX}>
            <Image
              style={styles.xyz}
              source={X}
            />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2fb7fd'
  },
  container3: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: 'black',
    height: 50
  },
  text: {
    fontSize: 50,
    justifyContent: 'center',
    color: 'gold'
  },
  xyz: {
    height: 50,
    width: 50
  }
})
