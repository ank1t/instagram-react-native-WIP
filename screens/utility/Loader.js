import React from 'react';
import { View } from 'react-native';
import { loaderStyleSheet } from '../../styles/utility/Loader';
import AnimatedLottieView from 'lottie-react-native';

export default function Loader() {
    return(
        <View style={loaderStyleSheet.container}>
            <AnimatedLottieView src={require("../../assets/json/loading.json")} autoplay loop/>
        </View>
    )
}