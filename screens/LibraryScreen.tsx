import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';

const LibraryScreen = () => {

    const route = useRoute();

    useEffect(() => {
        console.log(route);
    }, [])

    return (
        <View style={styles.container}>
            <Text>Library</Text>
        </View>
    )
}

export default LibraryScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});