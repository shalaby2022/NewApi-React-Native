import React from 'react'
import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from '../common/Footer';



const Info = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={styles.headerViews}>
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={require('../images/newspaper.png')}
                        />
                        <Text style={{fontSize:20, color: 'black', fontWeight: 'bold', marginLeft: 100}}>
                            NewDetail
                        </Text>
                    </View>
                    <ScrollView style={{ padding: 6, flex: 1}}>
                        <View style={styles.views} >
                            <Image
                                style={styles.img}
                                source={{uri:props.route.params.img}}
                            />
                            <View style={{ flexShrink: 1 }}>
                                <Text style={styles.header}>{props.route.params.title}</Text>
                                <Text style={styles.header}>
                                    <Text style={{color: 'darkgray'}}>Author: </Text>
                                    {props.route.params.author}
                                </Text>
                                <Text style={styles.data}>{props.route.params.description}, {props.route.params.description}</Text>
                                <Text style={styles.header}>
                                    <Text style={{color: 'darkgray'}}>Published in: </Text>
                                    {props.route.params.publishedAt}
                                </Text>
                            </View>
                        </View>
                    </ScrollView>
                    <Footer navigation={props.navigation} />
                </View>
            </SafeAreaView>
    )
}

export default Info

const styles = StyleSheet.create({
    views: {
        flexDirection: "column",
        backgroundColor: "#fff",
        padding: 8,
        borderRadius: 10,
        flex: 1
    },
    img: {
        width: '100%',
        padding:40,
        height: 200,
        borderRadius: 10,
    },
    header: {
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 10,
        marginBottom: 10,
        textAlign: "center",
        paddingVertical: 20,
        textTransform: 'uppercase'
    },
    data: {
        fontSize: 18,
        marginLeft: 10,
        color: '#777',
        fontWeight: 'bold'
    },
    headerViews: {
        flexShrink: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "gray",
        padding: 10,
    },
})