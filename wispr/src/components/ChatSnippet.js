import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import bird from '../assets/bird.jpg'
const ChatSnippet = props => (
    <TouchableOpacity onPress={() => props.selectChatHandler(props.data)} >
        <View style={styles.snippetHolder}> 
            <Image source={bird} style={styles.image} />
            <View style={styles.chatInfo}>
                <Text style={styles.chatTitle}> Chat Name </Text>
                <Text> {props.data.username} </Text>
                <Text> Last Message </Text>
            </View>
        </View>
    </TouchableOpacity>
)



export default ChatSnippet

const styles = StyleSheet.create({
    image: {
      height:90,
      width: 90,
    },
    snippet: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor:'red'
    },
    snippetHolder: {
        flex: 1,
        flexDirection: 'row',
        // backgroundColor: 'gray',
        borderBottomWidth: 5,
        borderColor: 'gray',
        margin: 5
    },
    chatInfo: {
        flexDirection: 'column'
    },
    chatTitle: {
        fontSize: 30,
        color: 'purple'
    }
})


// listItem: {
//     width: '100%',
//         padding: 10,
//             backgroundColor: '#eee',
//                 marginBottom: 5,
//                     flexDirection: 'row',
//                         alignItems: 'center'
// },
// image: {
//     marginRight: 8,
//         width: 30,
//             height: 30,
//     }