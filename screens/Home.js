import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, FlatList, TextInput, StyleSheet, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../common/Card';
import Footer from '../common/Footer';


const Home = ({ navigation }) => {

    const [news, setNews] = useState([])
    const [filteredNews, setFilteredNews] = useState([])
    const [search, setSearch] = useState('')
    const [refresh, setRefresh] = useState(false)

    useEffect(()=> {
        fetchNews()
    },[])

    const searchFilter = (input)=> {
        if (input) {
            const newData = news.filter((item)=> {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const inputData = input.toUpperCase();
                return itemData.indexOf(inputData) > -1;
            })
            setFilteredNews(newData);
            setSearch(input)
        } else {
            setFilteredNews(news)
            setSearch(input)
        }
    }

    const fetchNews = ()=> {
        return fetch('https://newsapi.org/v2/everything?q=tesla&from=2022-07-14&sortBy=publishedAt&apiKey=5511b6e00c9f46e69392688d68a92bbf')
                .then(res => res.json())
                .then(({articles}) => setNews(articles))
                .then(({articles}) => setFilteredNews(articles))
                .catch(err => console.log(err))
    }

    const ItemView = ({item}) => {
        return (
            <View>
            <Card 
                img={item.urlToImage} 
                title={item.title} 
                navigation={navigation} 
                description={item.description}
                author={item.author}
                publishedAt={item.publishedAt}
            />
        </View>
        )
    }

    const ItemSeparatorView = ()=> {
        return( 
            <View
            style={{height: 0.5,width: '100%', backgroundColor: '#c8c8c8'}}
            />
        )
    }

    const pull = ()=> {
        setRefresh(true)
        fetchNews()
        setTimeout(()=> {
            setRefresh(false)
        }, 1500)
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#ccc' }}>
            <View style={{ flex: 1}}>
                <TextInput
                style={styles.input}
                value={search}
                placeholder='Search'
                underlineColorAndroid="transparent"
                onChangeText={(input)=> {
                    searchFilter(input)
                }}
                />
                <FlatList
                    style={{ padding: 6, flex: 1}}
                    data={filteredNews}
                    keyExtractor={(item,index)=>index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                    refreshControl={
                            <RefreshControl
                                refreshing={refresh}
                                onRefresh={()=> pull()}
                                colors={['green','orange','red']}
                            />
                        }
                />
            </View>
            <Footer navigation={navigation} />
        </SafeAreaView>
        
    )
}

export default Home


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    },  
    itemStyle: {
        padding: 15,
    },
    input: {
        height: 50,
        borderWidth: 1,
        paddingLeft: 5,
        margin: 5,
        borderColor: 'black',
        borderRadius: 5,
        backgroundColor: 'white'
    }
})