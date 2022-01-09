import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { headerStyles } from '../../styles/home-screen-styles/HomeScreenStyles';

export default function BottomTabBar() {
    const TabImgsEnum = [
        {
            name: "HOME",
            active: require("../../assets/icons/bottom-tab/home-active.png"),
            inactive: require("../../assets/icons/bottom-tab/home-inactive.png")
        },
        {
            name: "SEARCH",
            active: require("../../assets/icons/bottom-tab/search-active.png"),
            inactive: require("../../assets/icons/bottom-tab/search-inactive.png")
        },
        {
            name: "REELS",
            active: require("../../assets/icons/bottom-tab/reel-active.png"),
            inactive: require("../../assets/icons/bottom-tab/reel-inactive.png")
        },
        {
            name: "SHOPPING",
            active: require("../../assets/icons/bottom-tab/shop-active.png"),
            inactive: require("../../assets/icons/bottom-tab/shop-inactive.png")
        },
        {
            name: "PROFILE",
            active: require("../../assets/icons/bottom-tab/profile-active.jpeg"),
            inactive: require("../../assets/icons/bottom-tab/profile-inactive.jpeg")
        }
    ]
    const [activeTab, setActiveTab] = useState("HOME")

    const BarButton = (config, index) => (
        <TouchableOpacity key={index} onPress={() => {
            setActiveTab(config.name)
        }}>
            <Image source={activeTab == config.name ? config.active : config.inactive}
                style={headerStyles.bottomTabImage}
            />
        </TouchableOpacity>
    )
    return (
        <View style={headerStyles.bottomTabContainer}>
            {TabImgsEnum.map((barButtonConfig, index) => (
                BarButton(barButtonConfig, index)
            ))}
        </View>
    )
}