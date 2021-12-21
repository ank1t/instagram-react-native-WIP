import React from 'react';
import { Image, View } from 'react-native';
import { headerStyles } from '../../styles/home-screen-styles/HomeScreenStyles';

export default function TripleCTABtns() {
    return(
        <View style={headerStyles.homeHeaderCTABtnsContainer}>
            <Image source={require("../../assets/icons/header/header-add.png")}
                style={headerStyles.homeHeaderCTABtns}
            />
            <Image source={require("../../assets/icons/header/header-like.png")}
                style={headerStyles.homeHeaderCTABtns}
            />
            <Image source={require("../../assets/icons/header/header-messages.png")}
            style={headerStyles.homeHeaderCTABtns}
            />
        </View>
    )
}