import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Signin, Home, Signup,Search,Profile,AddNews,EditNews} from '../screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const NavigatorTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffd930',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#1c4585',
          height: 60,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="search" size={size} color={color} />
          ),
        }}
        name="Search"
        component={Search}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="plus" size={size} color={color} />
          ),
        }}
        name="Add"
        component={AddNews}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({size, color, focused}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default function StackScreen () {
  const auth = useSelector((state) => state.auth);
  return (
    <NavigationContainer>

      {!auth.isLogin ? (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Splash" component={Splash} />
      <Stack.Screen options={{headerShown:false}} name="Signin" component={Signin} />
      <Stack.Screen options={{headerShown:false}} name="Signup" component={Signup} />
      </Stack.Navigator>
      ) : (
        <Stack.Navigator>
      <Stack.Screen
        options={{
          title: 'NewsPortal',
          headerStyle: {
            backgroundColor: '#1c4585',
            height:70,
            borderBottomWidth: 0,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
    shadowRadius: 0,
    elevation:0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="Main"
        component={NavigatorTab}
      />
      <Stack.Screen options={{
          title: 'NewsPortal',
          headerStyle: {
            backgroundColor: '#1c4585',
            height:70,
            borderBottomWidth: 0,
            shadowOffset: { height: 0, width: 0 },
            shadowOpacity: 0,
    shadowRadius: 0,
    elevation:0,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        name="EditNews"
        component={EditNews}/>
    </Stack.Navigator>
    )}
    </NavigationContainer>
    )
      };

