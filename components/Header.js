//import library
import React, {Component} from 'react';
import {Text, View} from 'react-native';

//create components
class Header extends Component {
    render() {
        return (
            <View style={styles.Header}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );
    }
}

//style
const styles = {
    Header: {
        padding: 15,
        alignItems:'center',
        backgroundColor: '#A2D9CE'
    },
    text: {
        fontSize: 19
    }
}

export default Header;