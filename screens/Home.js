import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import HomeHeader from '../components/home-screen-components/HomeHeader';
import { headerStyles } from '../styles/home-screen-styles/HomeScreenStyles';

export default function Home() {
    return(
        <SafeAreaView style={headerStyles.screenContainer}>
            <View style={headerStyles.headerContainer}>
                <HomeHeader />
            </View>
        </SafeAreaView>
    )
}