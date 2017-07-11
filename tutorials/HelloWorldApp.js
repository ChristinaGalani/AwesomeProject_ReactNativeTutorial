//The "Hello World!" react native app

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

//this code is defining HelloWorldApp, a new Component.
// the only thing that's required is a render function which returns some JSX to render.

export default class HelloWorldApp extends Component {
  render() {
    return (
      //the <Text></Text> syntax is JSX- a syntax for embedding XML within JavaScript. 
      //JSX lets you write your markup language inside code.
      //<Text> is a built-in component that just displays some text.
      <Text>Hello world!</Text>
    );
  }
}

//skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);