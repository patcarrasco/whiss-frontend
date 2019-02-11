import React from 'react'
import {FlatList, StyleSheet, Text, View, TextInput} from 'react-native'
import ChatSnippet from '../components/ChatSnippet';
import chatData from '../data/chats'

const ChatList = (props) => (
    <View style={styles.listPage}> 
        <Text style={styles.chatHeader}> CHATS </Text>
        <TextInput placeholder="Search Conversations..." style={styles.searchConvos}/>
        <FlatList
            data={chatData}
            renderItem={ ({item})=> <ChatSnippet data={item} selectChatHandler={props.selectChatHandler}/>}
        />
    </View>
)

export default ChatList

const styles = StyleSheet.create({
    listPage: {
        paddingTop: 60,
        width: '100%',
    },
    chatList: {
        paddingTop: 60,
        width: '100%'
    },
    chatHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'purple'
    },
    searchConvos: {
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 30,
        margin: 4
    }
})