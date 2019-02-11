import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SignIn from './src/components/SignIn';
import ChatList from './src/containers/ChatList'
import Chat from './src/containers/Chat'

export default class App extends Component {
  state = {
    username: "", 
    password: "",
    activeUser: false,
    selectedChat: null
  }

  signInInputHandler = (type, value) => {
    this.setState({
      [type]: value
    })
  }

  signInButtonHandler= () => {
    this.setState( prev => {
      return { 
        activeUser: !prev.activeUser
      }
    })
  }

  signInForm = () => (
    <View style={styles.signIn}>
      <Text style={styles.appName}> wispr </Text>
      <SignIn buttonHandler={this.signInButtonHandler} inputHandler={this.signInInputHandler} username={this.state.username} password={this.state.password} />
    </View>
  )

  selectChatHandler = (val) => {
    this.setState({
      selectedChat: val
    })
  }

  showModal = () => (
    (this.state.selectedChat !== null) ? <Chat chat={this.state.selectedChat} /> : null
  )

  render() {
    console.log(this.state.selectedChat)
    return (
      <View style={styles.fullApp}>
        {!this.state.activeUser ? this.signInForm() :
        <View>
          {this.showModal()}
          <ChatList selectChatHandler={this.selectChatHandler}/>
          <Text>FriendsList</Text>
        </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fullApp: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  signIn: {
    paddingTop: 60, 
    // backgroundColor: '#fff'  
  },
  appName: {
    textAlign: 'center',
    fontSize: 70,
    fontWeight: 'bold',
    color: 'purple'
  }
});
