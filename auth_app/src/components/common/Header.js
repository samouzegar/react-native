// import libs for making Component
import React from 'react';
import ReactNative, { Text, View } from 'react-native';

// make the Component
const Header = (props) => {
  return (
    <View style={styles.viewStyle}>
    <Text style={styles.textStyle}>{props.headerText}</Text>
    </View>
  );
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

// Add to app
export {Header};
