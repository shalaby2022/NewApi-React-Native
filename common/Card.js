import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


const Card = ({img, title, description, ind, publishedAt, navigation, author}) => {
    return (
        <View
        key={ind}
        style={styles.views}
        >
            <Image
                style={styles.img}
                source={{ uri: img }}
                img={img}
            />
            <View style={{ flexShrink: 1}}>
                <TouchableOpacity
                onPress={() => navigation.navigate("Info", { img, description, title, publishedAt, author, navigation})}
                >
                    <Text style={styles.header}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    views: {
        flexDirection: "row",
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 10,
        marginBottom: 10,
    },
    img: {
        width: 120,
        height: 200,
        borderRadius: 10,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    data: {
        fontSize: 16,
        marginLeft: 10,
        color: "#777"
    }
})