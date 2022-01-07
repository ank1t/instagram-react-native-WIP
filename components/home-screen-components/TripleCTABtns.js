import React, { Component } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { elementsThatOverlapOffsets } from "react-native/Libraries/Lists/VirtualizeUtils";
import { headerStyles } from "../../styles/home-screen-styles/HomeScreenStyles";

export default function TripleCTABtns(props) {
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

  return (
    <View style={headerStyles.homeHeaderCTABtnsContainer}>
      {props.config.map((element, index) => {
        return (
          <TouchableOpacity onPress={element.onPress} key={index}>
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
