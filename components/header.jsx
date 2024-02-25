import { Component } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

class Header extends Component{
    handleBackButton = () => {
        console.log("Hello World");
        this.props.setArticle("")
    }
    render(){
        return(
            <View style={styles.header}>
                {this.props.article != "" && <TouchableOpacity style={styles.backButton} onPress={this.handleBackButton}><Ionicons name="arrow-back" size={34} color="white" style={{marginTop: 'auto', marginBottom: 8}} /></TouchableOpacity>}
                <Text style={styles.text}>Globe</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 80,

        paddingHorizontal: 10,
        paddingTop: 30,

        flexDirection: 'row',

        backgroundColor: '#000000'
    },
    text: {
        color: '#ffffff',
        fontSize: 30,
        marginLeft: 'auto',
    },
    backButton: {
    }
})
export default Header;