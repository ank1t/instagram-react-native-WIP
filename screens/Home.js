import React, { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import BottomTabBar from "../components/home-screen-components/BottomTabBar";
import HomeHeader from "../components/home-screen-components/HomeHeader";
import Post from "../components/home-screen-components/Post";
import Story from "../components/home-screen-components/Story";
import { API_END_POINTS, performGETNetworkReq } from "../networking/Service";
import { headerStyles } from "../styles/home-screen/HomeScreenStyles";
import Loader from "./utility/Loader";

export default function Home() {
  const [stories, setStories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [networkError, setNetworkError] = useState(null);

  useEffect(() => {
    performGETNetworkReq(
      API_END_POINTS.STORIES_ENDPOINT,
      setStories,
      setNetworkError
    );
  }, []);

  useEffect(() => {
    performGETNetworkReq(
      API_END_POINTS.POSTS_ENDPOINT,
      setPosts,
      setNetworkError
    );
  }, []);

  const HomeScreenView = (stories, posts) => {
    if (stories && posts && stories.length > 0 && posts.length > 0) {
      return ContainerView(true, true);  
    }
    return ContainerView(false, false)
  };

  const ContainerView = (showStoriesView, showPostsView) => {
    return (
        <>
            <>
                <SafeAreaView style={headerStyles.screenContainer}>
                    <StatusBar barStyle="light-content" />
                    {HeaderView()}
                    {!showStoriesView || !showPostsView ? PlaceHolderView() : <></>}
                    {showStoriesView && showPostsView ? StoriesAndPostsView() : <></>}
                    {FooterView()}
                </SafeAreaView>
            </>
            {!showStoriesView || !showPostsView ? <Loader /> : <></>}
      </>
    );
  };
  const HeaderView = () => {
    return (
      <View style={headerStyles.headerContainer}>
        <HomeHeader />
      </View>
    );
  };

  const FooterView = () => {
    return <BottomTabBar />;
  };

  const PlaceHolderView = () => {
    return <View style={headerStyles.emptyPostStoriesContainer}/>
  }

  const StoriesAndPostsView = () => {
    return (
    <>
      <View style={headerStyles.storiesContainer}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {stories.map((element, index) => {
            return <Story key={index} element={element} />;
          })}
        </ScrollView>
      </View>
      <FlatList
        data={posts}
        initialNumToRender={2}
        renderItem={({ item }) => <Post post={item} />}
        keyExtractor={(item) => item.id}
      />
    </>)
  };

  return HomeScreenView(stories, posts);
}
