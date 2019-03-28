import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Header from './Header';
import Card from './Card';

class App extends React.Component {
    render() {
        return (
            <View>
                <Header title = {"Albums"}></Header>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.text}>Natada Yasamud No.6002041510021</Text>
                </View>
                <Card />
            </View>
        );
    }
}

const styles = {
    text: {
        fontSize: 15,
        justifyContent: 'center', 
        alignItems: 'center',
    }
}

export default App;