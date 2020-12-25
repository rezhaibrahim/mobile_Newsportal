import React from 'react'
import { View, StyleSheet, StatusBar, FlatList,Image,TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png'
import { Container,Text, Input, Content, Card, CardItem, Thumbnail, Left, Body, Textarea,Form, Item, Label } from 'native-base';
import IconF from 'react-native-vector-icons/FontAwesome';

const DetailNews = ({item, navigation}) => {
    return (
        <>
        <StatusBar backgroundColor='#1c4585' barStyle="light-content"/>
        <View style={styles.container}>
            
        <Content>
          <Card style={{width:340}}>
          <CardItem>
                <Text style={styles.txt}>Add the latest news</Text>
            </CardItem>
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
              <IconF  name="picture-o"  color="gray" size={200}  />

                </View>
            <View style={styles.baseCmr}>
                <TouchableOpacity style={styles.cmr}>
                <IconF name="picture-o" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cmr}>
                  <IconF name="camera" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
            <Content padder>
          <Form>
              <Label style={styles.title}>Title</Label>
          <Item regular rounded>
              <Input style={styles.input} placeholder="please enter your news title"/>
            </Item>
          </Form>
        </Content>
          <Content padder>
          <Form>  
           <Label style={styles.title}>Description</Label>
            <Textarea style={styles.input} rowSpan={8} bordered placeholder="please enter your news  description" />
            
          </Form>
          
        </Content>
        <Content padder>
        <Form>
              <Label style={styles.title}>Reference</Label>
          <Item regular rounded>
              <Input style={styles.input} placeholder="please enter your news reference" />
            </Item>
          </Form>
        </Content>
        <Content>
            <View style={styles.base}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnTxt}>Save</Text>
                </TouchableOpacity>
            </View>
        </Content>
        
        
          </Card>
          </Content>
        </View>
        </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    txt:{
        fontSize:25,
        fontWeight:'bold',
        color:'#1c4585',
    },
    input:{
        paddingLeft:30,
    },
    title:{
        marginLeft:20,
        marginBottom:10,
    },
    base:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
        marginBottom:20,
        
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#1c4585',
        width:100,
        height:50,
        borderRadius:30
    },
    btnTxt:{
        color:'#fff'
    },
    baseCmr:{
        flexDirection:'row',
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
      },
      cmr:{
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'purple',
        height:70,
        width:70,
        borderRadius:40
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

})

export default DetailNews
