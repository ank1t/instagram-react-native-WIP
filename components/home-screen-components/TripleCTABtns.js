import React, { Component } from "react";
import { Image, View } from "react-native";
import { TouchableOpacity } from "react-native";
import { elementsThatOverlapOffsets } from "react-native/Libraries/Lists/VirtualizeUtils";
import { headerStyles } from "../../styles/home-screen-styles/HomeScreenStyles";

export default function TripleCTABtns(props) {
  return (
    <View style={headerStyles.homeHeaderCTABtnsContainer}>
      {props.config.map((element, index) => {
        return (
          <TouchableOpacity onPress={element.onPress} key={index}>
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
