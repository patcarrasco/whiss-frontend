import React, {Component} from 'react';
import {StyleSheet, Text, View, AsyncStorage} from 'react-native';
import SignIn from './src/components/SignIn';
import ChatList from './src/containers/ChatList'
import Chat from './src/containers/Chat'
import ActionCable from 'react-native-actioncable'

export default class App extends Component {
  state = {
    username: "", 
    password: "",
    activeUser: false,
    selectedChat: null,
  }

  API_WS_ROOT = 'ws://10.39.111.113:3000/api/v1/cable'
  SOCKET = {
    consumer: ActionCable.createConsumer(this.API_WS_ROOT),
    createChannel: (consumer, channelSettings, handleData) => {
      return consumer.subscriptions.create(channelSettings, {
      received: (data) => {
        handleData(data);
      },
      connected: function() {
        alert('success')
      },
      disconnected: function() {
        console.log('connection disconnected')
      }
    })
  }

  }

  signInInputHandler = (type, value) => {
    this.setState({
      [type]: value
    })
  }

  signInButtonHandler= () => { 
    this.fetchSignIn(this.state.username, this.state.password)
      .then(res => res.json())
      .then(e => this.setupChannel(e))
    
    this.setState( prev => {
      return { 
        activeUser: !prev.activeUser
      }
    })
  }

  setupChannel = (data) => {
    AsyncStorage.setItem("token", data.token)
    this.SOCKET.chatChannel = this.SOCKET.createChannel(this.SOCKET.consumer, { channel: "ChatsChannel", token: data.token}, this.handleChannelData)
  }
  
  handleChannelData = (e) => {
    return
  }

  fetchSignIn = (username, password) => {
    const object = {
      username: username,
      password: password
    }
    return fetch(`http://10.39.111.113:3000/api/v1/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(object)
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

  closeModal = () => {
    this.setState({
      selectedChat: null
    })
  }

  showModal = () => (
    (this.state.selectedChat !== null) ? <Chat chat={this.state.selectedChat} closeModal={this.closeModal} SOCKET={this.SOCKET} /> : null
  )

  render() {

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
