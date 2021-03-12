import React, {useState} from 'react';
import LogInPage from "./logIn";
import {Card} from "react-native-elements";
import {Button, Text, TextInput, View} from "react-native";


const HomePage = ({navigation, route}) => {
    const [anotherUserName, setAnotherUserName] = useState('');
    return (
            <View>
                <Card style={{flex: 1}}>
                    <Text>
                        Hello {route.params.userName} to the home screen.
                    </Text>
                    <TextInput
                        value={anotherUserName}
                        onChangeText={(username) => setAnotherUserName(username)}
                        placeholder={'Enter Any value'}
                    />
                    <Button
                        title="Go To Log-In Screen"
                        onPress={() =>
                            navigation.navigate('LogInPage', {
                                anotherUserName: anotherUserName,
                                anotherMyFunc: setAnotherUserName,
                            })
                        }
                    />
                </Card>
            </View>
    )
};

export default HomePage;

