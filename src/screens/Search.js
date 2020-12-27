import React,{useEffect,useState} from 'react'
import { View,StyleSheet,FlatList,TouchableOpacity } from 'react-native'
import { Text, Input, Content, Card, CardItem, Thumbnail, Item, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import logo from '../assets/rezha.jpg';
import userAction from '../redux/actions/user';
import {useDispatch, useSelector} from 'react-redux';
import profile from '../assets/profile.png';
import {API_URL} from '@env';
import moment from 'moment';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    desc:
      "You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to",
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    desc:
      "You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    desc:
      "You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    desc:
      "You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to",
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    desc:
      "You're not limited to the components and APIs bundled with React Native. React Native has a community of thousands of developers. If you're looking for a library that does something specific, please refer to",
  },
];
const RenderItem = ({item, navigation}) => {
      const {id,username,picture,email} = item.item
      console.log(item);
      const toList = () => {
        navigation.navigate('ListNewsUser',id);
        console.log("user id",id);
      };
  return (
    <>
    <View style={styles.card}>
         <Content scrollEnabled={false}>
                <Card style={{justifyContent:'center',alignItems:'center',width:350, height: 70}}>
                <CardItem>
                  <Left>
          <TouchableOpacity onPress={() => toList()}>
                    <Thumbnail source={picture === null ? profile: {uri: API_URL + picture}}/>
              </TouchableOpacity>
                    <Body>
  <Text style={styles.username}>{username}</Text>
                      <Text note>{email}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
        </Content>
      
    </View>
    
    </>
  );
};

export default function Search({navigation}) {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.auth)  
  const ListUser = useSelector(state => state.user.listUser)
  const [search, setSearch] = useState('');
      const [data, setData] = useState([]);
      // console.log(data);
      const [refresh, setRefresh] = useState(false)

      useEffect(() => {
        dispatch(userAction.listUser(token,search))
      }, [dispatch,search])

      useEffect(() => {
        if (ListUser.length > 0) {
          setData(ListUser)
        }
       }, [ListUser.length])

      useEffect(() => {
        if (refresh) {
          setData(ListUser);
          setRefresh(false);
        }
      }, [ListUser]);

      const doRefresh =() => {
        setRefresh(true);
        dispatch(userAction.listUser(''));
      }
  return (
        <View>
            <Item rounded style={styles.search}>
        <Icon name="user" size={25} color="gray" />
            <Input  placeholder="Search" onChangeText={(text) => setSearch(text)} />
            <Icon  name="search" size={25} color="gray" />
          </Item>
          <View style={styles.flat}>
            
          <FlatList
          data={data}
          renderItem={(item)=>( <RenderItem item={item} navigation={navigation} />)}
          keyExtractor={(item) => item.id}
          onRefresh={doRefresh}
          refreshing={refresh}
          />

          </View>
         
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',

    },
    flat:{
      justifyContent:'center',
      alignItems:'center'
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
    username:{
      color:"#1c4585",
      fontSize:18,
      fontWeight:'bold',
    }
  });