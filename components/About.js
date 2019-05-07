// import libray
import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

// write component 
class About extends Component {
    static navigationOptions = {
        title: 'Profile'
    }
    constructor() {
        super();
        this.state ={
            name: '',
            email: ''
        }
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem('@storage_Token')
        axios.get("http://128.199.240.120:9999/api/auth/me", {
                headers: {
                    "accept":"*/*",
                    "Authorization": "Bearer " + token
                }
            })
        .then(response =>{
            console.log(response);
            this.setState({
                email: response.data.data.email,
                name: response.data.data.name
            })
        })
        .catch(error=>{
            console.log('error',error);
        })
    }

    render() {
        if (this.state.name == '') {
            return <View>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        }
        return (
            <View>
                <Text style={styles.text}>Name: {this.state.name}</Text>
                <Text style={styles.lastText}>Email: {this.state.email}</Text>
                
                <Button 
                    title="Back"
                    onPress={() =>
                        this.props.navigation.push('Login')}
                />
                
            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 30
    },
    lastText: {
        fontSize: 30,
        marginBottom: 20
    }
}

// export 
export default About;
