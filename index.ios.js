import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native'
import { Router, Actions, Scene } from 'react-native-router-flux'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'

const X = require('./images/button/x.png')
const Y = require('./images/button/y.png')
const Z = require('./images/button/z.png')

class MyMovieDB extends Component {
  render () {
    let backButtonFunction = function () {
      return (
        <TouchableOpacity style={styles.zTouch} onPress={Actions.pop}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={Z} style={styles.z} />
          </View>
        </TouchableOpacity>
      )
    }
    return (
      <Router>
        <Scene key='root' hideNavBar={true} navigationBarStyle={styles.navigationBarStyle}>

        {/* PageOne */}
          <Scene initial={true} key='pageOneY' direction='vertical' duration={400} component={PageOne}
            />
          <Scene key='pageOneX' duration={400} component={PageOne}
            />
        {/* PageTwo */}
          <Scene key='pageTwoY' direction='vertical' duration={400} component={PageTwo}
          />
          <Scene key='pageTwoX' duration={400} component={PageTwo}
            />
        {/* PageThree */}
          <Scene key='pageThreeY' direction='vertical' duration={400} component={PageThree}
          />
          <Scene key='pageThreeX' duration={400} component={PageThree}
            />
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: 'black',
    bottom: 0,
    top: null,
    height: 60
  },
  x: {
    height: 50,
    width: 50,
    bottom: 10
  },
  y: {
    height: 50,
    width: 50,
    bottom: 10,
    justifyContent: 'center'
  },
  z: {
    width: 50,
    height: 50,
    bottom: 0
  }
})

AppRegistry.registerComponent('MyMovieDB', () => MyMovieDB)
