//import library
import React, {Component} from 'react';
import {Text, View, TextInput,Button} from 'react-native';
import axios from 'axios';

//write component
class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        //this.onChangeEmail = this.onChangeEmail.bind(this)
    }
    onChangeEmail(e) {
        console.log('onChangeEmail', e)
        this.setState({ email: e})
    }
    onChangePassword(e) {
        console.log('onChangePassword', e)
        this.setState({ password: e})
    }
    onPress() {
        console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        axios.post(url, this.state)
            .then(response => {
                console.log('token', response.data.data.token)
            })
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{ height: 40, fontSize: 20}}
                    placeholder="email"
                    value={this.state.email}
                    onChangeText={this.onChangeEmail.bind(this)}
                />
                <TextInput 
                    secureTextEntry
                    style={{ height: 40, fontSize: 20}}
                    placeholder="password"
                    value={this.state.password}
                    onChangeText={this.onChangePassword.bind(this)}
                />
                <Button
                    title="Login"
                    onPress={this.onPress.bind(this)}
                />
            </View>
        );
    }
}
//export
export default Login;