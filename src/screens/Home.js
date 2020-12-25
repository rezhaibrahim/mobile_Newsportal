import React from 'react';
import { View,  StyleSheet, StatusBar, FlatList,Image } from 'react-native';
import logo from '../assets/logo.png'
import { Container,Text, Input, Content, Card, CardItem, Thumbnail, Item, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
    desc: "You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to"
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
    desc: "You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to"
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
    desc: "You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to"
  },
];

const RenderItem = ({item, navigation}) => {
        
      return(
        
        
        <View style={styles.card}>
          <Content>
          <Card style={{width:340}}>
            <CardItem>
              <Left>
                <Thumbnail source={logo} />
                <Body>
                  <Text>MNC</Text>
                 <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <View style={styles.baseImg}>
              {/* <Image source={logo} style={styles.img} /> */}
              <Icon name="picture-o"  color="gray" size={200}  />

                </View>
            <CardItem>
              <Left>
            <TouchableOpacity >
                  <Text>JUDUL</Text>
              </TouchableOpacity>
              </Left>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
            <CardItem>
             <Text>lorEu ea officia proident nulla amet deserunt elit irure cupidatat occaecat nulla. Pariatur velit reprehenderit dolore nulla officia tempor dolor aliquip aliqua. Tempor ullamco reprehenderit velit amet esse sint amet consequat qui exercitation ad. Aute veniam do culpa nostrud proident eiusmod minim pariatur occaecat Lorem magna qui. Aliquip duis sint deserunt pariatur ullamco tempor magna incididunt. Enim proident nostrud nisi veniam id ex excepteur aliqua tempor aliqua fugiat do. Magna elit cupidatat laborum minim consectetur.</Text>
            </CardItem>
          </Card>
          </Content>
         
          </View>
          
      )
}

const HomeScreen = ({navigation}) => {

    return (<>
        <StatusBar backgroundColor='#1c4585' barStyle="light-content"/>
        <Item rounded style={styles.search}>
        <Icon name="globe" size={25} color="gray" />
            <Input  placeholder="Search" />
            <Icon  name="search" size={25} color="gray" />
          </Item>
      <View style={styles.container}>
        <FlatList 
          data={DATA}
          renderItem={(item)=>( <RenderItem item={item} />)}
          keyExtractor={(item) => item.id}
        />
      </View>
      </>
    );
};

export default HomeScreen;

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
  img:{
    flex: 1,
      height:300,
      width:300,
      
  },
  baseImg:{
      justifyContent:'center',
      alignItems:'center',
      borderWidth:2,
      margin:10,
      borderColor:'gray'
  }
  
});