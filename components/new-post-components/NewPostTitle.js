import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { newPostStyles } from '../../styles/new-post/NewPostScreenStyles';

export default function NewPostTitle() {
    return(
        <View style={newPostStyles.navBarContainer}>
            <TouchableOpacity>
                <Image source={require("../../assets/icons/newPost/back-icon.png")}
                    style={newPostStyles.navBarBackBtn}
                />
            </TouchableOpacity>
            <Text style={newPostStyles.navBarTitle}>New Post</Text>
            <TouchableOpacity>
                <Image source={require("../../assets/icons/newPost/back-icon.png")}
                    style={[newPostStyles.navBarBackBtn, {opacity: 0}]}
                    />
            </TouchableOpacity>
        </View>
    )
}