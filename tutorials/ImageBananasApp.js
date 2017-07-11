import React, { Component } from 'react';
import {AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      //When you create an image, you can use a prop named source to control what image it shows.
      //Notice that {pic} is surrounded by braces, to embed the variable pic into JSX. You can put any JavaScript expression inside braces in JSX.
      <Image source={pic} style={{width: 193, height: 110, alignItems: 'center'}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);