import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

class CardSection extends Component {
    render() {
        return (
            <View>
                {this.props.children}
            </View>
        );
    }
}

export default CardSection;