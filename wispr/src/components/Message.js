import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native'
import bird from '../assets/bird.jpg'
const Message = props => (
    <TouchableOpacity >
        <View> 
            <View>
                <Text> {props.data.content} </Text>
            </View>
        </View>
    </TouchableOpacity>
)


export default Message