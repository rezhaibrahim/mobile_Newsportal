import React from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Alert
} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import authAction from '../redux/actions/auth'
import Icon from 'react-native-vector-icons/Feather';

class SignUpScreen extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email:'',
           userName: '',
           password:'',
           confirmPassword:'',
           check_textInputChange: false,
           check_email: false,
           secureTextEntry: true,
           secureTextEntrys: true,
           isValidUser: true,
           isValidEmail: true,
           isValidPassword: true,
           isValidConfirmPassword: true,
           btn:false
        };
     }

     onChangeEmail(input){
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(reg.test(input) === true){
            this.setState({
                email:input,
                check_email: true,
                isValidEmail: true
            })
        }else{
            this.setState({
                email:input,
                check_email: false,
                isValidEmail: false
            })
        }
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
 onChangeConfirmPassword(value){
    //  console.log(this.state.password);
    if (value === this.state.password) {
        this.setState({
            confirmPassword:value,
            isValidConfirmPassword:true,
        })
    }else{
        this.setState({
            confirmPassword:value,
            isValidConfirmPassword:false
        })
    }
}


updateSecureTextEntry = () => {
    this.setState(prevState => ({
        secureTextEntry: !prevState.secureTextEntry
      }));
}
updateSecureTextEntrys = () => {
    this.setState(prevState => ({
        secureTextEntrys: !prevState.secureTextEntrys
      }));
}

register = (e) => {
    e.preventDefault();
    const {email,userName,password} = this.state;
    const data = {email,userName,password};
    // console.log(userName,password,data);
    this.props.doRegister(data);
    this.showAlert();
    
   
    
  }
  showAlert = () => {
    const {alertMsg,createSuccess} = this.props.auth;
    if (createSuccess === true) {
        if (alertMsg !== this.state.alertMsg) {
            this.setState({alertMsg});
            Alert.alert(alertMsg);
          }
          
    }else{
        if (alertMsg !== this.state.alertMsg) {
            this.setState({alertMsg});
            Alert.alert(alertMsg);
          }
    }
    
  };
 componentDidMount(){
     this.showAlert
     const {alertMsg,createSuccess} = this.props.auth;
     if (createSuccess === true) {
         this.props.navigation.navigate('Signin')
     }
 }

  
    render(){
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#1c4585' barStyle="light-content"/>
              <View style={styles.header}>
                  <Text style={styles.text_header}>Register Now!</Text>
              </View>
              
              <View 
                  style={styles.footer}
              >
                  <ScrollView>
                  <Text style={styles.text_footer}>Email</Text>
                  <View style={styles.action}>
                      <FontAwesome 
                          name="at"
                          color="#05375a"
                          size={20}
                      />
                      <TextInput 
                          placeholder="Your Email"
                          style={styles.textInput}
                          autoCapitalize="none"
                          onChangeText={(input) => this.onChangeEmail(input)}
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
                  { this.state.isValidEmail ? null : 
                  <View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>enter the email format correctly.</Text>
                  </View>
                  }
                  <Text style={styles.text_footer}>Username</Text>
                  <View style={styles.action}>
                      <FontAwesome 
                          name="user-o"
                          color="#05375a"
                          size={20}
                      />
                      <TextInput 
                          placeholder="Your Username"
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
                  <View style={styles.action}>
                      <Feather 
                          name="lock"
                          color="#05375a"
                          size={20}
                      />
                      <TextInput 
                          placeholder="Your Password"
                          secureTextEntry={this.state.secureTextEntry ? true : false}
                          style={styles.textInput}
                          style={styles.textInput}
                          autoCapitalize="none"
                          onChangeText={(value) => this.onChangePassword(value)}
                      />
                      <TouchableOpacity
                          onPress={this.updateSecureTextEntry }
                      >
                          {this.state.secureTextEntry ? 
                          <Icon 
                          style={{marginTop:12,marginRight:20}}
                              name="eye-off"
                              color="grey"
                              size={20}
                          />
                          :
                          <Icon 
                          style={{marginTop:12,marginRight:20}}
                              name="eye"
                              color="grey"
                              size={20}
                          />
                          }
                      </TouchableOpacity>
                  </View>
                  { this.state.isValidPassword ? null : 
                  <View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>Password must be 8 digits or more.</Text>
                  </View>
                  }
      
                  <Text style={styles.text_footer}>Confirm Password</Text>
                  <View style={styles.action}>
                      <Feather 
                          name="lock"
                          color="#05375a"
                          size={20}
                      />
                      <TextInput 
                          placeholder="Confirm Your Password"
                          secureTextEntry={this.state.secureTextEntrys ? true : false}
                          style={styles.textInput}
                          style={styles.textInput}
                          autoCapitalize="none"
                          onChangeText={(value) => this.onChangeConfirmPassword(value)}
                      />
                      <TouchableOpacity
                          onPress={this.updateSecureTextEntrys}
                      >
                         {this.state.secureTextEntrys ? 
                          <Icon 
                          style={{marginTop:12,marginRight:20}}
                              name="eye-off"
                              color="grey"
                              size={20}
                          />
                          :
                          <Icon 
                          style={{marginTop:12,marginRight:20}}
                              name="eye"
                              color="grey"
                              size={20}
                          />
                          }
                      </TouchableOpacity>
                  </View>
                  { this.state.isValidConfirmPassword ? null : 
                  <View animation="fadeInLeft" duration={500}>
                  <Text style={styles.errorMsg}>please match the password above.</Text>
                  </View>
                  }
                  <View style={styles.textPrivate}>
                      <Text style={styles.color_textPrivate}>
                          By signing up you agree to our
                      </Text>
                      <Text style={styles.color_textPrivate}>Terms of service</Text>
                      <Text style={styles.color_textPrivate}>and</Text>
                      <Text style={styles.color_textPrivate}>Privacy policy</Text>
                  </View>
                  <View style={styles.button}>
                      { this.state.isValidEmail && this.state.isValidUser && this.state.isValidPassword && this.state.isValidConfirmPassword?
                      (
                        <TouchableOpacity
                        disabled={false}
                            style={styles.signUp}
                            onPress={this.register}
                        >
                            <Text style={styles.textSignUp}>Sign Up</Text>
                        </TouchableOpacity>

                      ):(
                        <TouchableOpacity
                        disabled={false}
                            style={styles.disable}
                        >
                            <Text style={styles.textSignUp}>Sign Up</Text>
                        </TouchableOpacity>

                      )

                      }
                      
                  </View>
                  <View style={styles.signIn}>
                            <Text>if you don't have an account, please  </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                                <Text style={{color:'#1c4585'}} >Login</Text>
                            </TouchableOpacity>    
                        </View>
                  </ScrollView>
              </View>
            </View>
          );
    }
    
};
const mapStateToProps = state => ({
    auth: state.auth,
  });
  
  const mapDispatchToProps = {
    doRegister: authAction.register
  };  
 export default connect(mapStateToProps, mapDispatchToProps)(SignUpScreen)

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#1c4585'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn:{
        flexDirection:'row',
        marginTop:20,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
    },
    signUp: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#1c4585',
    },
    disable: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'gray',
    },
    textSignUp: {
        fontSize: 18,
        fontWeight: 'bold',
        color:'white'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 12,
    },
  });
