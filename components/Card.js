import React, {Component} from 'react';
import {Text, View, Image, Button} from 'react-native';
import CardSection from './CardSection';

class Card extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <Image
                        style={{width: 100, height: 100}}
                        source={{uri: 'https://thailandsuperstar.com/images/pix/2222842/F_1983173512977832432.jpg'}}
                    />
                    <Text>พรุ่งนี้ค่อย</Text>
                    <Text>POP</Text>
                </CardSection>
                <CardSection>
                    <Image
                        style={{width: 300, height: 300}}
                        source={{uri: 'https://images.unsplash.com/photo-1455757618770-0a58b0b28ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80'}} 
                    />
                </CardSection>
                <CardSection>
                    <View style={styles.button}>
                    <View style={{ width: 100 }}>
                    <Button
                        title="Buy"
                        color="#A2D9CE"
                    />
                    </View>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    button: { 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10 
    }
}

export default Card;