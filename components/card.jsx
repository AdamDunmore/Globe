import { Component } from "react";
import { View, Text, Image, StyleSheet } from 'react-native'

class Card extends Component{
    render(){
        return(
            <View style={styles.container}>
                {this.props.data["image_url"] != undefined && <Image source={{uri: this.props.data["image_url"]}} style={styles.image} alt="ARTICLE IMAGE"/>}
                <Text style={styles.text}>{this.props.data["title"]}</Text>
            </View>
        )
    }
}

styles = StyleSheet.create({
    container: {
        backgroundColor: "#333",
        width: '95%',

        alignItems: 'center',

        padding: 10,
        margin: 8,

        borderRadius: 15,
    },
    text: {
        color: '#ffffff',
        fontSize: 20,
    },
    image: {
        width: '100%',
        height: 150,
    }
})

export default Card;