import * as React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';


export default Footer = ({ navigation }) => {

    return (
        <View style={styles.views}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}>
                <Image
                    style={{ width: 35, height: 35 }}
                    source={require('../images/home.png')}
                />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    views: {
        flexShrink: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "gray",
        padding: 7
    }
})