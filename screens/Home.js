import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native';
import BottomTabBar from '../components/home-screen-components/BottomTabBar';
import HomeHeader from '../components/home-screen-components/HomeHeader';
import Post from '../components/home-screen-components/Post';
import Story from '../components/home-screen-components/Story';
import { API_END_POINTS, performGETNetworkReq } from '../networking/Service';
import { headerStyles } from '../styles/home-screen-styles/HomeScreenStyles';

export default function Home() {
    const [stories, setStories] = useState([])
    const [posts, setPosts] = useState([])
    const [networkError, setNetworkError] = useState(null)

    useEffect(() => {
        performGETNetworkReq(API_END_POINTS.STORIES_ENDPOINT,
             setStories,
             setNetworkError)
    }, [])

    useEffect(() => {
        performGETNetworkReq(API_END_POINTS.POSTS_ENDPOINT,
            setPosts,
            setNetworkError)
    }, [])
    
    return(
        <SafeAreaView style={headerStyles.screenContainer}>
            <View style={headerStyles.headerContainer}>
                <HomeHeader />
            </View>
            <View style={headerStyles.storiesContainer}>
                <ScrollView showsHorizontalScrollIndicator={false}
                horizontal={true}>
                    {stories.map((element, index) => {
                        return <Story key={index} element={element}/>    
                    }
                    )}
                </ScrollView>
            </View>
            <FlatList 
            data={posts}
            renderItem={( {item} ) => (
                <Post post={item}/>
            )}
            keyExtractor={(item) => item.id}
            />
            <BottomTabBar/>
        </SafeAreaView>
    )
}