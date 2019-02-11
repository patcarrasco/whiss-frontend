import React from 'react'
import {FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import ChatSnippet from '../components/ChatSnippet';
import chats from '../data/chats'

export default class ChatList extends React.PureComponent {
    state = {
        chats: chats
    }

    componentDidMount() {
        
    }

    render() {
        return (
        <View style={styles.listPage}> 
            <View style={styles.header}>
                <Text style={styles.chatTitle}> CHATS </Text>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.addButton}> + </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TextInput placeholder="Search Conversations..." style={styles.searchConvos}/>
            <FlatList
                data={this.state.chats}
                renderItem={ ({item})=> <ChatSnippet data={item} selectChatHandler={this.props.selectChatHandler}/>}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    listPage: {
        paddingTop: 60,
        width: '100%',
    },
    chatList: {
        paddingTop: 60,
        width: '100%'
    },
    chatTitle: {
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
    },
    header: {
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    addButton: {
        fontSize: 30
    }
})