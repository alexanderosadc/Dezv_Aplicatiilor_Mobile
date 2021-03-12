import React, {useState} from 'react';
import {Card} from "react-native-elements";
import {Button, Text, TextInput, View} from "react-native";


const LogInPage = ({navigation, route}) => {
    const [userName, setUserName] = useState('');
    let textToShow = "Unnamed";
    let paramsRouter = route.params;
    console.log(JSON.stringify(paramsRouter));
    if(paramsRouter !== undefined)
    {
        textToShow = route.params.anotherUserName;
    }
    return (
            <View>
                <Card style={{flex: 1}}>
                    <Text>
                        Please enter {textToShow} email to pass to another screen.
                    </Text>
                    <TextInput
                        value={userName}
                        onChangeText={(username) => setUserName(username)}
                        placeholder={'Enter Any value'}
                    />
                    <Button
                        title="Go Next"
                        onPress={() =>
                            navigation.navigate('HomePage', {
                                userName: userName,
                                myFunc: setUserName,
                            })
                        }
                    />
                </Card>
            </View>
    )
};

export default LogInPage;

