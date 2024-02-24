import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Feed from './components/feed'
import Header from './components/header'

export default function App(){
  return (
    <View style={styles.container}>
      <Header></Header>
      <Feed/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
