import React from 'react';
import { 
    View, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    Alert
} from 'react-native';
import {Text, Button, Item, Input} from 'native-base';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Feather';


import {useDispatch, useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import authAction from '../redux/actions/auth'


const SignInScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const {isError} = useSelector((state) => state.auth);
    const auth = useSelector((state) => state.auth);
    console.log(authAction);

    const schema = Yup.object().shape({
        userName: Yup.string().required('Username field is required'),
        password: Yup.string()
          .min(8, 'Password required at least 8 characters')
          .max(20, 'Password required max 20 characters')
          .required('Password field is required'),
      });

      function doLogin(data) {
          console.log(data);
        dispatch(authAction.login(data));
      }
    
      React.useEffect(() => {
        if (isError) {
          Alert.alert('Login failed!', 'Email or password is wrong.');
          dispatch(authAction.reset());
        }
      });
    
    const [data, setData] = React.useState({
        userName: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });



    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    // const loginHandle = (userName, password) => {

    //     const foundUser = Users.filter( item => {
    //         return userName == item.username && password == item.password;
    //     } );

    //     if ( data.username.length == 0 || data.password.length == 0 ) {
    //         Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }

    //     if ( foundUser.length == 0 ) {
    //         Alert.alert('Invalid User!', 'Username or password is incorrect.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }
    // }

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#1c4585' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome to NewsPortal</Text>
        </View>
        <Formik
      initialValues={{
        userName: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values) => doLogin(values)}>
      {({handleChange, handleBlur, handleSubmit, values, touched, errors}) => (
        <View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <Text style={styles.text_footer}>Username</Text>
            <View style={styles.icon}>
                <FontAwesome 
                    style={{marginTop:12}}
                    name="user-o"
                    color='gray'
                    size={20}
                />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                />
                {data.check_textInputChange ? 
                <View
                    animation="bounceIn"
                >
                    <Icon 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>not listed.</Text>
            </View>
            }
            

            <Text style={styles.text_footer}>Password</Text>
            <View style={styles.icon}>
                <Icon 
                style={{marginTop:12}}
                    name="lock"
                    color='gray'
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Icon 
                    style={{marginTop:12}}
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Icon 
                    style={{marginTop:12}}
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>wrong password.</Text>
            </View>
            }
            

            
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={handleSubmit}
                >
                    <Text style={styles.textSign}>Sign In</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Text style={{color: '#1c4585',marginTop:20,marginBottom:10}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.signUp}>
                <Text>if you don't have an account, please  </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={{color:'#1c4585'}} >Register</Text>
                </TouchableOpacity>    
            </View>
            
        </View>
        )}
            </Formik>
        </View>
     
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#1c4585'
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    footer: {
        flex: 1.5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 40
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#1c4585',
        fontSize: 18
    },
    icon: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomColor: '#1c4585',
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#1c4585',
        paddingBottom: 5,
        
    },
    textInput: {
        flex: 1,
        marginBottom:10,
        paddingLeft: 10,
        color: '#05375a',
        borderBottomColor:'#05375a',
        borderBottomWidth: 0.5,
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 12,
    },
    button: {
        alignItems: 'center',
        marginTop: 10
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#1c4585',
    },
    signUp:{
        flexDirection:'row',
        marginTop:20,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
},
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'#fff'
    }
  });


