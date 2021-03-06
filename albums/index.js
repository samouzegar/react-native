// Import a library to help create a component
import React from 'react';
import {Text, AppRegistry, View} from 'react-native';
// import Header
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
  <View style={{flex:1}}>
    <Header headerText='Albums!'/>
    <AlbumList />
  </View>
);

// Render component to device
AppRegistry.registerComponent('albums', ()=>App);
