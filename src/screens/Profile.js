import React,{useEffect} from 'react';
import {
  View,
  
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
  TextInput
} from 'react-native';
import logo from '../assets/rezha.jpg';
import {
  Text,
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
import newsAction from '../redux/actions/news';
import userAction from '../redux/actions/user';
import {useDispatch, useSelector} from 'react-redux';
import profile from '../assets/profile.png';
import {API_URL} from '@env';
import moment from 'moment';
import authAction from '../redux/actions/auth';
import {Formik} from 'formik';
import * as Yup from 'yup';



const RenderItem = ({item, navigation}) => {
  console.log("tem",item);
  const {id,title,createdAt,picture} = item.item

  let time = moment(createdAt).format('LLLL');
  const toDetail = () => {
    navigation.navigate('DetailNews',id);
    console.log("item id",id);
  };
  return (
    <>
    <View style={styles.card}>
         <Content scrollEnabled={false}>
          <SwipeRow
            leftOpenValue={75}
            rightOpenValue={-75}
            left={
              <Button success onPress={() => navigation.navigate('EditNews')}>
                <Icon active name="pencil" />
              </Button>
            }
            body={
                <Card style={{justifyContent:'center',alignItems:'center',width:350, height: 70}}>
                <CardItem>
                  <Left>
                    <Thumbnail source={picture === null ? profile: {uri: API_URL + picture}} />
                    <Body>
                      <TouchableOpacity onPress={() => toDetail()}>
            <Text style={styles.listTitle}>{title}</Text>
                      </TouchableOpacity>
                      <Text note>{time}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
        </Content>
      
    </View>
    
    </>
  );
};

export default function Profile({navigation}) {
  const OpenBottomSheet = React.useRef();
  const OpenBottomSheetNews = React.useRef();

  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)
  const myNews = useSelector(state => state.news.myNews)
  const pageInfo = useSelector(state => state.news.myNewPageInfo)
  const myProfile = useSelector(state => state.user.myProfile)
  console.log(myProfile);

  const {userName,picture} = myProfile

  const isEdit = () => {
    OpenBottomSheet.current.open();
  };
  const isEditNews = () => {
    OpenBottomSheetNews.current.open();
  };
  useEffect(() => {
    dispatch(userAction.myProfile(token))
    dispatch(newsAction.getMyNews(token))
  }, [dispatch])
  
  
  const isSignOut = () => {
    dispatch(authAction.logout());
  };
  return (
    <>
    <StatusBar backgroundColor='#1c4585' barStyle="light-content"/>
      <View style={styles.container}>
        <Card style={styles.baseCard}>
          <CardItem style={styles.baseProfile}>
            <Left>
              <Image style={styles.img} source={picture === null ? profile: {uri: API_URL + picture}} />
              <Body>
  <Text style={styles.username}>{userName}</Text>
                <Text style={styles.note} note>Creator</Text>
            <View style={styles.hr} />
            <View style={styles.baseArticles}>

                <Text style={styles.note} >Articles</Text>
                <View style={styles.count}>
                <Text style={styles.countColor}>{pageInfo.totalData}</Text>
            </View>
           
            </View>
            <View style={styles.edit}>
                <TouchableOpacity  onPress={() => isEdit()}>
                <IconF name='pencil' color='#fff' />
                </TouchableOpacity>
                
            </View>
            <View style={styles.power}>
                <TouchableOpacity  onPress={() => isSignOut()}>
                <IconF name='power-off' color='#fff' />
                </TouchableOpacity>
                
            </View>
            
            
              </Body>
            </Left>
          </CardItem>
          <View style={{marginTop:20,marginLeft:20}}>
          <Text style={{fontSize:18,fontWeight:"bold"}}>List Articles</Text>
          </View>
          
        </Card>

        <View style={{marginTop:100,position:'relative'}}>
                <FlatList

      data={myNews}
      renderItem={(item)=>( <RenderItem item={item} navigation={navigation} />)}
      keyExtractor={(item) => item.id}
    />
            </View>
            
      </View>
    

      <BottomSheet
        ref={OpenBottomSheet}
        closeOnDragDown={true}
        closeOnPressMask
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.8)',
          },
          draggableIcon: {
            backgroundColor: 'gray',
          },
          container: {
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            elevation: 2,
          },
        }}
        height={600}>
        <Formik 
        >
          {() => (
            <>
            <View style={styles.baseTitleBtm}>
            <Text style={styles.titleBtm}>Change your Profile</Text>
          </View>
            <View style={styles.parentBtm}>
              
              <View>
              <Image style={styles.picture}  source={logo} />
              </View>
              <View style={styles.baseCmr}>
                <TouchableOpacity style={styles.cmr}>
                <IconF name="picture-o" size={30} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.cmr}>
                  <IconF name="camera" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.baseUser}>
              <Form>
                <Item floatingLabel>
                <Label>Username</Label>
                <Input placeholder='username' />
                </Item>
              </Form>
              </View>
              <View style={styles.baseCmr}>
                <TouchableOpacity style={styles.btnEdit}>
                <Text style={styles.tbtn}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCancel}>
                  <Text style={styles.tbtn}>Cancel</Text>
                </TouchableOpacity>
              </View>
              
              
              
            </View>
            </>
          )}
        </Formik>
      </BottomSheet>

      


    </>
  );
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
    zIndex:1
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
          power:{
            position:'absolute',
                backgroundColor:'red',
                borderRadius:25,
                width:20,
                height:20,
                alignItems:'center',
                justifyContent:'center',
                marginLeft:150,
                zIndex:2
          },
          listTitle:{
            color:"#1c4585",
      fontSize:18,
      fontWeight:'bold',
          }
                
});
