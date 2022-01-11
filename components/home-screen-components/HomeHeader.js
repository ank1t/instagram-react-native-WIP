import React from 'react';
import { Image, View } from 'react-native';
import { headerStyles } from '../../styles/home-screen/HomeScreenStyles';
import { headerConfig } from './PostHelper';
import TripleCTABtns from './TripleCTABtns';

export default function HomeHeader() {
    return(
        <>
        <View style={headerStyles.imageContainer}>
            <Image source={require("../../assets/header-logo.png")} 
                style={headerStyles.homeIconImage}
            />
        </View>
        <TripleCTABtns config={headerConfig}/>
        </>
    )
}