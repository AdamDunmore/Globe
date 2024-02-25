import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Feed from './components/feed'
import Header from './components/header'
import { useState } from 'react';


export default function App(){
  const [article, setArticle] = useState("");
  return (
    <View style={styles.container}>
      <Header article={article} setArticle = {(a) => {setArticle(a)}}/>
      <Feed article = {article} setArticle = {(a) => {setArticle(a)}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
