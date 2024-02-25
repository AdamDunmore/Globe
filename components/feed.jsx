import { Component, useEffect, useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { WebView } from 'react-native-webview';

import apiKey from "../data/apiKey";

import Card from './card.jsx'

function Feed(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async (inputQuery, inputLang, inputCountry) => {
            inputQuery = "UK Politics"
            inputLang = ""
            inputCountry = ""

            requestData = {
                query: inputQuery,
                lang: inputLang,
            }
        
            languages = {
                English : 'en'
            }
        
            link = `https://newsapi.org/v2/everything?q=${requestData.query}&apiKey=${apiKey}&sortBy=popularity&language=${languages.English}`
        
            await fetch(new Request(link))
                .then((data) => data.json())
                .then(json => {setItems(json.articles)})
                .catch(err => console.log(err))
        };fetchData();

        
        // Return an empty function
        return () => {};
    }, [])

    return (  
        <View style={styles.reactDiv}>
            {(items[0] != undefined && props.article == "") && <View style={styles.container}>  
                {props.article == "" && <FlatList style={styles.list}
                    data={items}
                    renderItem={({item}) => <Card data={item} openArticle={(a) => {props.setArticle(a)}}></Card>}
                />}
            </View>}
            {props.article != "" && <WebView source={{uri: props.article}} style={{flex: 1}}></WebView>}
        </View>
    );
}

const styles = StyleSheet.create({
    reactDiv: {
        flex: 1
    },
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',

        backgroundColor: '#101010',
    },
    list:{
        flex: 1,
        padding: 30,
    }
})

export default Feed;