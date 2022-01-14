import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { headerStyles } from "../../styles/home-screen/HomeScreenStyles";
import { useNavigation } from '@react-navigation/native';

export default function TripleCTABtns(props) {
  const navigation = useNavigation()
  const unreadBadge = (shouldShowBadge) => {
    if(!shouldShowBadge) {
      return <></>
    }
    return(
      <View style={headerStyles.unreadBadgeContainer}>
        <Text style={headerStyles.unreadBadgeText}>11</Text>
      </View>
    )
  }

  const handleOnPress = (element) => {
    if(element.id == "ADD-POST") {
      navigation.push("NewPost")
      return
    }
    element.onPress()
  }

  return (
    <View style={headerStyles.homeHeaderCTABtnsContainer}>
      {props.config.map((element, index) => {
        return (
          <TouchableOpacity onPress={() => {
            handleOnPress(element)
          }} key={index}>
            {unreadBadge(element.shouldShowBadge)}
            <Image
              source={element.image}
              style={headerStyles.tripleCTABtns}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
