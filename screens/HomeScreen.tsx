
import * as React from 'react';
import { StyleSheet, FlatList, View  } from 'react-native';

import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import AlbumScreen from "./AlbumScreen";

import { API, graphqlOperation} from 'aws-amplify';
import { listAlbumCategorys } from '../src/graphql/queries'
import {useEffect, useState} from "react";

export default function HomeScreen() {

    const [categoires, setCategories] = useState([]);

    useEffect(() => {
        const fetchAlbumCategories = async () => {
            try{
                const data = await API.graphql(graphqlOperation(listAlbumCategorys));
                setCategories(data.data.listAlbumCategorys.items);
                console.log(data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchAlbumCategories();
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={categoires}
                renderItem={({ item }) => (
                    <AlbumCategory
                        title={item.title}
                        albums={item.albums.items}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

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