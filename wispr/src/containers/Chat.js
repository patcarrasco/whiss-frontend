import React from 'react'
import {View, StyleSheet, Text, Modal, Button, TextInput} from 'react-native'
import sampleChat from '../data/sampleChat'

class Chat extends React.PureComponent {
    
    render() {
        return (
        <Modal>
                <View style={styles.window}>
                    <View style={styles.head}>
                        <Text style={styles.chatTitle}>
                            {props.chat.username}
                        </Text>
                        <View style={styles.backButton} >
                            <Button title="back to all" />
                        </View>
                    </View> 
        
                    <View style={styles.chatSpace}>
        
        
                    </View>
                    <View style={styles.chatInput}>
                        <TextInput placeholder="message..." multiline={true}/>
                    </View>
                </View>
            </Modal>
        )
    } 
}


const styles = StyleSheet.create({
    window: {
        flex: 1,
        paddingTop: 40
    },
    head: {
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        height: '10%',
        borderWidth: 10,
        borderColor: 'black'
    },
    chatTitle:{
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    backButton: {
        borderWidth:2,
        borderColor: 'green',
        // flexDirection: 'column',
        // justifyContent:'flex-end'
    },
    chatSpace: {
        borderWidth:2,
        borderColor:'red',
        backgroundColor: 'red',
        height: '75%'
    },
    chatInput: {
        borderWidth:2,
        borderColor: 'green',
        backgroundColor: 'yellow',
        fontSize: 12,
        height: '15%'
    }
})


export default Chat