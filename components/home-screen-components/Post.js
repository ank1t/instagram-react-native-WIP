import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { HOST_URL } from '../../networking/Constants';
import { headerStyles } from '../../styles/home-screen/HomeScreenStyles';
import TripleCTABtns from './TripleCTABtns';
import { postConfig } from './PostHelper';
import Comments from './Comments';

function Post(props) {
    const {
        id,
        author,
        userAvatar,
        postImg,
        likes,
        comments
    } = props.post

    return (
      <View style={headerStyles.postContainer}>
        <View style={headerStyles.postProfileInfoContainer}>
          <View style={headerStyles.postProfileImgTitleContainer}>
            <Image
              source={{ uri: HOST_URL + userAvatar }}
              style={headerStyles.bottomTabImage}
            />
            <Text style={headerStyles.postTitle}>{author}</Text>
          </View>
          <Text style={headerStyles.postOptionsText}>···</Text>
        </View>
        <Image
          source={{ uri: HOST_URL + postImg }}
          style={headerStyles.postImage}
        />
        <View style={headerStyles.postBottomContainer}>
          <View style={headerStyles.postActionsContainer}>
            <View>
              <TripleCTABtns config={postConfig}/>
            </View>
            <TouchableOpacity>
              <Image source={require("../../assets/icons/post-icons/postSave.png")} 
                style={headerStyles.tripleCTABtns}/>
            </TouchableOpacity>
          </View>
          <Text style={headerStyles.postLikes}>
            {Number(likes).toLocaleString()} likes
          </Text>
          <Comments postComments={comments}/>
        </View>
      </View>
    );
}

export default memo(Post)