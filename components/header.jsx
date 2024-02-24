import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Header extends Component{
    render(){
        return(
            <View style={styles.header}>
                <Text style={styles.text}>Globe</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 50,

        paddingHorizontal: 40,

        justifyContent: 'center',

        backgroundColor: '#000000'
    },
    text: {
        color: '#ffffff',
        fontSize: 30,
    }
})
export default Header;