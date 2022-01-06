import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { HOST_URL } from '../../networking/Constants';
import { headerStyles } from '../../styles/home-screen-styles/HomeScreenStyles';

export default function Story(props) {
    var {
        username, 
        image_url
    } = props.element
    return(
        <View style={headerStyles.storyContainer}>
            <TouchableOpacity>
                <Image source={{uri: HOST_URL.concat(image_url)}}
                style={headerStyles.storyImgStyle}/>
                <Text style={headerStyles.storyTextStyle}
                ellipsizeMode='tail' numberOfLines={1}>{username}</Text>
            </TouchableOpacity>
        </View>
    )
}