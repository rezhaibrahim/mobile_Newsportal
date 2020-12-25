import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Container, Input, Content, Card, CardItem, Thumbnail, Item, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Search() {
    return (
        <View>
            <Item rounded style={styles.search}>
        <Icon name="user" size={25} color="gray" />
            <Input  placeholder="Search" />
            <Icon  name="search" size={25} color="gray" />
          </Item>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
    },
    card:{
      flex:1,
      flexDirection:'column',
    },
    search:{
      paddingLeft:30,
      backgroundColor: "#fff",
      paddingRight:30
    },
    
  });