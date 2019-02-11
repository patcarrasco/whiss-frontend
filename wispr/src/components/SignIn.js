import React from 'react'
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native'

export default class SignIn extends React.PureComponent {

    render() {
        return (
            <View>
                <View style={styles.SignInForm}>
                    <TextInput style={styles.inputs} name='username' value={this.props.username} onChangeText={(e) => this.props.inputHandler('username', e)} placeholder="username" placeholderTextColor='gray'/>
                    <TextInput style={styles.inputs} secureTextEntry={true} name='password' onChangeText={(e) => this.props.inputHandler('password', e)} placeholder="password" placeholderTextColor='gray' />
                </View>
                <View style={styles.buttonHolder} >
                    <TouchableOpacity style={styles.buttonArea} onPress={this.props.buttonHandler}>
                        <Text style={styles.logIn}>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    SignInForm: {
        height: "66%",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    inputs: {
        margin: 3,
        borderColor: 'gray',
        width: '60%',
        fontSize: 35,
        color: '#9C27B0',
        borderBottomWidth: 3,
        borderBottomColor: 'purple',
        // backgroundColor:'white'
        // borderColor: 'gray',
    },
    logIn: {
        color: 'purple',
        fontSize: 30
    },
    buttonArea: {
        borderColor: 'gray',
        borderWidth: 2,
        height: '30%',
        alignItems: 'center'
    },
    buttonHolder: {
        paddingTop: 10,
        alignItems:'center',
        flex: 1
    }
})
