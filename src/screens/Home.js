import React,{useEffect,useState} from 'react';
import { View,  StyleSheet, StatusBar, FlatList,Image } from 'react-native';
import logo from '../assets/logo.png'
import { Container,Text, Input, Content, Card, CardItem, Thumbnail, Item, Left, Body, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import newsAction from '../redux/actions/news';
import {useDispatch, useSelector} from 'react-redux';
import profile from '../assets/profile.png';
import {API_URL} from '@env';
import moment from 'moment';

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
        // console.log("cek",item.item);
        const {id,title,description,createdAt} = item.item
        const {userName,picture} = item.item.Author
        
        let time = moment(createdAt).format('LLLL');
        const toDetail = () => {
          navigation.navigate('DetailNews',id);
          console.log("item id",id);
        };
        
      return(
        
        
        <View style={styles.card}>
          <Content>
          <Card style={{width:340}}>
            <CardItem>
              <Left>
              
                <Thumbnail source={picture !== null ? {uri: API_URL + picture} : profile} />
                <Body>
                  <Text style={style.username}>{userName}</Text>
                    <Text note>{time}</Text>
                </Body>
              </Left>
            </CardItem>
            <View style={styles.baseImg}>
              <Image source={item.item.picture !== null ? {uri: API_URL + item.item.picture} : profile}  style={styles.img} />

                </View>
            <CardItem>
            <TouchableOpacity onPress={() => toDetail()} >
                  <Text style={style.title}>{title}</Text>
              </TouchableOpacity>
              
            </CardItem>
            <CardItem>
             <Text numberOfLines={3} ellipsizeMode="tail" style={style.desc}>{description}</Text>
            </CardItem>
          </Card>
          </Content>
         
          </View>
          
      )
}
const style = StyleSheet.create({
  title:{
    fontSize:20,
    fontWeight:'bold',
    color:"#1c4585",
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 2,
    
  },
  desc:{
    fontSize:15,
    color:'gray'
  },
  hr:{
    borderBottomColor: '#d6d6d6',
    borderBottomWidth: 2,
    width: 50,
  },
  username:{
    color:"#1c4585",
    fontSize:18,
    fontWeight:'bold',
  }
})

const HomeScreen = ({navigation}) => {
      const dispatch = useDispatch();
      const {token} = useSelector(state => state.auth)
      const News = useSelector(state => state.news.allNews)
      const Page = useSelector(state => state.news)
      console.log(Page);
      // const search = useSelector(state => state.news.resultSearch)
      // console.log(seac);
      const [search, setSearch] = useState('');
      const [data, setData] = useState([]);
      const [refresh, setRefresh] = useState(false)
      // console.log(Value);
      //   const searching = () => {
      //     if(Value.length > 0){
      //       setValue('');
      //         dispatch(newsAction.getAllNews(token, Value))
      //       }
      // }

      useEffect(() => {
        dispatch(newsAction.getAllNews(token,search))
      }, [dispatch,search])

      useEffect(() => {
       if (News.length > 0) {
         if (Page.allNewPageInfo.currentPage === 1) {
           setData(News)
         } else{
           setData(data.concat(News))
         }
       }
      }, [Page.allNewPageInfo.currentPage,News.length])

      useEffect(() => {
        if (refresh) {
          setData(News);
          setRefresh(false);
        }
      }, [News]);

      const loadMore = () => {
        if (Page.allNewPageInfo.nextLink) {
          dispatch(
            newsAction.getAllNews(search, Page.allNewPageInfo.currentPage + 1),
          );
        }
      }
    
      const doRefresh =() => {
        setRefresh(true);
        dispatch(newsAction.getAllNews(''));
      }

    return (
    <>
        <StatusBar backgroundColor='#1c4585' barStyle="light-content"/>
        <Item rounded style={styles.search}>
        <Icon name="globe" size={25} color="gray" />
            <Input  
            placeholder="Search" 
            onChangeText={(text) => setSearch(text)}
            />
            <Icon  name="search" size={25} color="gray" />
          </Item>
      <View style={styles.container}>
        <FlatList 
          data={data}
          renderItem={(item)=>( <RenderItem item={item} navigation={navigation} />)}
          keyExtractor={(item) => item.id}
          onEndReached={async () => await loadMore()}
          onEndReachedThreshold={0.2}
          onRefresh={doRefresh}
          refreshing={refresh}
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
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation:6,
  },
  search:{
    paddingLeft:30,
    backgroundColor: "#fff",
    paddingRight:30
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
  
});