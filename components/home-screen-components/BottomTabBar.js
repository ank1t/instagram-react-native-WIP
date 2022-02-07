import React, { useEffect, useState } from "react";
import {
  ActionSheetIOS,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { headerStyles } from "../../styles/home-screen/HomeScreenStyles";
import { firebase } from "../../firebase";

export default function BottomTabBar() {
  const TabImgsEnum = [
    {
      name: "HOME",
      active: require("../../assets/icons/bottom-tab/home-active.png"),
      inactive: require("../../assets/icons/bottom-tab/home-inactive.png"),
    },
    {
      name: "SEARCH",
      active: require("../../assets/icons/bottom-tab/search-active.png"),
      inactive: require("../../assets/icons/bottom-tab/search-inactive.png"),
    },
    {
      name: "REELS",
      active: require("../../assets/icons/bottom-tab/reel-active.png"),
      inactive: require("../../assets/icons/bottom-tab/reel-inactive.png"),
    },
    {
      name: "SHOPPING",
      active: require("../../assets/icons/bottom-tab/shop-active.png"),
      inactive: require("../../assets/icons/bottom-tab/shop-inactive.png"),
    },
    {
      name: "PROFILE",
      active: require("../../assets/icons/bottom-tab/profile-active.png"),
      inactive: require("../../assets/icons/bottom-tab/profile-inactive.png"),
    },
  ];
  const [activeTab, setActiveTab] = useState("HOME");
  useEffect(() => {
    if (activeTab == "PROFILE") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Cancel", "Sign out"],
          destructiveButtonIndex: 1,
          cancelButtonIndex: 0,
          userInterfaceStyle: "dark",
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            handleSignout();
          }
        }
      );
    }
  });

  const handleSignout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
  };

  const BarButton = (config, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        setActiveTab(config.name);
      }}
    >
      <Image
        source={activeTab == config.name ? config.active : config.inactive}
        style={[
          headerStyles.bottomTabImage,
          activeTab == "PROFILE" && config.name == activeTab
            ? headerStyles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={headerStyles.bottomTabContainer}>
      {TabImgsEnum.map((barButtonConfig, index) =>
        BarButton(barButtonConfig, index)
      )}
    </View>
  );
}
