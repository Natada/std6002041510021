import React, {Component} from 'react';
import {Text, View, Image, Button} from 'react-native';
import CardSection from './CardSection';

class Profile extends Component {
    render() {
        return (
            <View>
                <CardSection>
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            style={{width: 150, height: 150, marginLeft: 20, marginTop: 15}}
                            source={{uri: 'https://thailandsuperstar.com/images/pix/2222842/F_1983173512977832432.jpg'}}
                        />
                        <View style={{marginTop: 10, marginLeft: 10}}>
                            <Text>พรุ่งนี้ค่อย</Text>
                            <Text>POP</Text>
                        </View>
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.Image}>
                        <Image
                            style={{width: 400, height: 350, marginTop: 10}}
                            source={{uri: 'https://images.unsplash.com/photo-1455757618770-0a58b0b28ebd?ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80'}} 
                        />
                    </View>
                </CardSection>
                <CardSection>
                    <View style={styles.button}>
                    <View style={{ width: 100 }}>
                    <Button
                        title="Buy Now"
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
        marginTop: 15
    },
    Image: {
        justifyContent: 'center', 
        alignItems: 'center', 
    }
}

export default Profile;