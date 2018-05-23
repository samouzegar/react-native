// Component for individual album details
import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection>
      <View>
        <Image source={{uri:props.album.thumbnail_image}} style={{width: 50, height: 50}} />
      </View>
      <View style={{flexDirection: 'column', justifyContent: 'space-around', paddingLeft: 10}}>
        <Text style={{fontSize: 14, fontWeight: 'bold'}}>{props.album.title}</Text>
        <Text>{props.album.artist}</Text>
      </View>
      </CardSection>
      <CardSection>
      <Image source={{uri: props.album.image}} style={{height:300, flex:1, width: null}} />
      </CardSection>
      <CardSection>
      <Button onPress={()=>Linking.openURL(props.album.url)} buttonName={'Buy Now'} />
      </CardSection>
    </Card>
  )
};

export default AlbumDetail;
