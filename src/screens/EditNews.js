import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  TextInput
} from 'react-native';
import logo from '../assets/rezha.jpg';
import {
  Label,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Item,
  Left,
  Body,
  Input,
  SwipeRow,
  Button,
  Icon,
  Form,
  Textarea
} from 'native-base';
import IconF from 'react-native-vector-icons/FontAwesome';
import BottomSheet from 'react-native-raw-bottom-sheet';
import {Formik} from 'formik';
import * as Yup from 'yup';

export default function EditNews({navigation}) {
    return (
        <Content>
              <Card >
              <CardItem>
                    <Text style={styles.txt}>Edit the news</Text>
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
                    <TouchableOpacity style={styles.cmr}>
                        <Text style={styles.btnTxt}>Save</Text>
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
               
            
            
              </Card>
              <View style={styles.base}>
                   
                </View>
              </Content>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:"#fff"
    },
    img: {
      width: 100,
      height: 150,
      borderRadius: 20,
    },
    card: {
      position: 'relative',
      flexDirection: 'column',
    },
    username: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    baseProfile: {
        justifyContent:"flex-start",
        alignItems:'flex-start',
      borderRadius:20,
      width: 300,
      height: 180,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation:6,
      marginLeft:30,
      marginTop:20,
    },
    baseCard:{
        width:358,
        height:140,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        marginTop:0,
        backgroundColor:'#1c4585',
        borderTopWidth: 0,
        shadowColor: 'transparent'
      },
      hr:{
          borderBottomColor: '#d6d6d6',
          borderBottomWidth: 2,
          width: 150,
          marginTop:10,
          marginBottom:10,
        },
        note:{
            color:'gray'
        },
        baseArticles:{
            alignItems:'center'
          },
          count:{ 
              backgroundColor:'#1c4585',borderRadius:25,width:50,height:50,alignItems:'center',justifyContent:'center' },
              countColor:{
                  color:'#ffcf40'
              },
              edit:{ 
                  position:'absolute',
                  backgroundColor:'green',
                  borderRadius:25,
                  width:20,
                  height:20,
                  alignItems:'center',
                  justifyContent:'center',
                  marginLeft:150
              },
              parentBtm:{
                  justifyContent:'center',
                  alignItems:'center',
              },
              picture:{
                width:200,
                height:200,
                borderRadius:30
  
              },
              baseTitleBtm:{
                marginLeft:40,
                marginBottom:30
              },
              titleBtm:{
                fontSize:30,
                color:'#1c4585',
                fontWeight:'bold',
              },
              baseCmr:{
                flexDirection:'row',
                marginTop:20,
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
              baseUser:{
                width:300,
              },
              btnEdit:{
                margin:10,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: '#3ec994',
                height:50,
                width:100,
                borderRadius:40
              },
              btnCancel:{
                margin:10,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor: '#e6375d',
                height:50,
                width:100,
                borderRadius:40
              },
              tbtn:{
                fontSize:15,
                fontWeight:'bold',
                color:'#fff'
              },
              content:{
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
                  
  });