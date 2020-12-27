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



import {connect} from 'react-redux';
import authAction from '../redux/actions/auth'


class SignInScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
           userName: '',
           password:'',
           check_textInputChange: false,
           secureTextEntry: true,
           isValidUser: true,
           isValidPassword: true,
        };
     }
 

     onChangeUserName(value){
            if(value.trim().length >= 4){
                this.setState({
                    userName:value,
                    check_textInputChange: true,
                    isValidUser: true
                })
            }else{
                this.setState({
                    userName:value,
                    check_textInputChange: false,
                    isValidUser: false
                })
            }
     }
     onChangePassword(value){
         if (value.trim().length >= 8) {
             this.setState({
                 password:value,
                 isValidPassword:true,
             })
         }else{
             this.setState({
                 password:value,
                 isValidPassword:false
             })
         }
     }
   

     handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            this.setState({
                password: val,
                isValidPassword: true
            });
        } else {
            this.setState({
                password: val,
                isValidPassword: false
            });
        }
    }

     updateSecureTextEntry = () => {
        this.setState(prevState => ({
            secureTextEntry: !prevState.secureTextEntry
          }));
    }

     handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            this.setState({
                isValidUser: true
            });
        } else {
            this.setState({
                isValidUser: false
            });
        }
    }

     Login = (e) => {
        e.preventDefault();
        const {userName,password} = this.state;
        const data = {userName,password};
        console.log(userName,password,data);
        this.props.doLogin(data);
      }
      showAlert = () => {
        const {alertMsg} = this.props.auth;
        if (alertMsg !== this.state.alertMsg) {
          this.setState({alertMsg});
          Alert.alert(alertMsg);
        }
      };
      
      componentWillUnmount() {
        const {isError} = this.props.auth;
          if (isError === false) {
              this.showAlert();
          }else{
              this.showAlert()
          }
      }
      componentDidMount() {
        setTimeout(() => {
          StatusBar.setBackgroundColor('#1c4585');
        }, 100);
      }
        
      render(){
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
              <View style={styles.header}>
                  <Text style={styles.text_header}>Welcome to NewsPortal</Text>
              </View>
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
                          onChangeText={(value) => this.onChangeUserName(value)}
                          
                      />
                      {this.state.check_textInputChange ? 
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
                  { this.state.isValidUser ? null : 
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
                          secureTextEntry={this.state.secureTextEntry ? true : false}
                          style={styles.textInput}
                          autoCapitalize="none"
                          onChangeText={(value) => this.onChangePassword(value)}
                      />
                      <TouchableOpacity
                          onPress={this.updateSecureTextEntry }
                      >
                          {this.state.secureTextEntry ? 
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
                  { this.state.isValidPassword ? null : 
                  <View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>wrong password.</Text>
                  </View>
                  }
                  
      
                  
                  <View style={styles.button}>
                      <TouchableOpacity
                          style={styles.signIn}
                          onPress={this.Login}
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
              </View>
           
          );
      }
   
};

const mapStateToProps = state => ({
    auth: state.auth,
  });
  
  const mapDispatchToProps = {
    doLogin: authAction.login
  };  

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);

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


