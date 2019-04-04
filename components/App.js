import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from './Header';
import Card from './Card';
import Login from './Login';

class App extends React.Component {
    render() {
        return (
            <View>
                <Header title = "Login"></Header>
                <Login />
            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 20,
        justifyContent: 'center', 
        alignItems: 'center',
    }
}

export default App;