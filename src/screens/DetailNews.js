import React from 'react'
import { View, StyleSheet, StatusBar, FlatList,Image,TouchableOpacity,Linking } from 'react-native';
import logo from '../assets/logo.png'
import { Container,Text, Input, Content, Card, CardItem, Thumbnail, Left, Body, Textarea,Form, Item, Label } from 'native-base';
import IconF from 'react-native-vector-icons/FontAwesome';
import newsAction from '../redux/actions/news';
import {useDispatch, useSelector} from 'react-redux';
import profile from '../assets/profile.png';
import {API_URL} from '@env';
import moment from 'moment';

const DetailNews = ({route}) => {
  console.log("route",route);
  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)
  const id = route.params
  const {detailNews} = useSelector(state => state.news)
  // console.log("detail",Detail);

  const {title,description,author,createdAt,updatedAt,reference} = detailNews
  // const {userName, picture} = detailNews.Author

  React.useEffect(() => {
    dispatch(newsAction.getDetail(token,id))
  }, [dispatch])
  // console.log(Detail,id)
  let time = moment(createdAt).format('LLLL');
    return (
        <>
        <StatusBar backgroundColor='#1c4585' barStyle="light-content"/>
        <View style={styles.container}>
            
        <Content>
          <Card style={{width:340}}>
          <CardItem>
    <Text style={styles.txt}>{title}</Text>
            </CardItem>
            <CardItem>
              <Left>
              {/* <Thumbnail source={picture !== null ? {uri: API_URL + picture} : profile} /> */}
                <Body>
                  <Text>Article by {author}</Text>
                 <Text note>{time}</Text>
                </Body>
              </Left>
            </CardItem>
                <View style={styles.baseImg}>
              <Image source={detailNews.picture !== null ? {uri: API_URL + detailNews.picture} : profile}  style={styles.img} style={styles.img} />
              

                </View>
           
            <Content padder>
          
        </Content>
          <Content padder>
          <Form>  
           <Label style={styles.title}>Description</Label>
            <Text style={styles.desc}>{description}</Text>
            
          </Form>
          <Form>  
           <Label style={styles.title}>Reference</Label>
            <Text style={styles.link} onPress={() => Linking.openURL(reference)}>{reference}</Text>
            
          </Form>
          
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
    desc:{
      fontSize:15,
      color:'gray',
      textAlign:'justify'
    },
    link:{
      fontSize:15,
      color:'blue',
      textAlign:'left'
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
        fontSize:18,
        fontWeight:'bold',
        color:'#1c4585',
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
      width:320,
      
          
      },
      baseImg:{
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation:6,
      }

})

export default DetailNews
