import React from 'react'
import {View, StyleSheet, Text, Modal, Button, TextInput} from 'react-native'
import sampleChat from '../data/sampleChat'

class Chat extends React.PureComponent {
    state = {
        messages: []
    }
    

    componentDidMount() {
        const {consumer, createChannel} = this.props.SOCKET
        const object = {channel: 'MessagesChannel', chat_id: this.props.chat.id}
        this.props.SOCKET.messageChannel = createChannel(consumer, object, this.handleMessageData)
    }

    handleMessageData = (data) => {
        let parsed = JSON.parse(data)
        if (Array.isArray(parsed.data)) {
            let newData = parsed.data.map(mes => mes.attributes)
            this.setState({
                messages: [...this.state.messages, ...newData]
            })
        } else {
            this.setState({
                messages: [...this.state.messages, parsed.data.attributes]
            }, () => console.log(this.state.messages))
        }
    }
    
    render() {
        return (
        <Modal>
                <View style={styles.window}>
                    <View style={styles.head}>
                        <Text style={styles.chatTitle}>
                            {this.props.chat.username}
                        </Text>
                        <View style={styles.backButton} >
                            <Button onPress={this.props.closeModal} title="back to all"/>
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