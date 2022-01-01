import React from 'react';
import { Image, Text, View } from 'react-native';
import { HOST_URL } from '../../networking/Constants';
import { headerStyles } from '../../styles/home-screen-styles/HomeScreenStyles';
import TripleCTABtns from './TripleCTABtns';

export default function Post(props) {
    const {
        id,
        author,
        userAvatar,
        postImg,
        likes,
        comments
    } = props.post

    function renderPostComments() {
        if(comments.length == 0) {
            return <></>
        } else if(comments.length <=2) {
            comments.map((comment) => {
                return(
                    <Text style={headerStyles.commentText}>
                        <Text style={headerStyles.commentAuthor}>{comment.author}</Text>
                        {comment.comment}
                    </Text>
                )
            })
        }
    }

    return(
        <View style={headerStyles.postContainer}>
            <View style={headerStyles.postProfileInfoContainer}>
                <View style={headerStyles.postProfileImgTitleContainer}>
                    <Image source={{uri: HOST_URL+userAvatar}}style={headerStyles.bottomTabImage}/>
                    <Text style={headerStyles.postTitle}>{author}</Text>
                </View>
                <Text style={headerStyles.postOptionsText}>···</Text> 
            </View>
            <Image source={{uri: HOST_URL+postImg}}
                style={headerStyles.postImage}
            />
            <View>
                <View>
                    <TripleCTABtns />
                </View>
                <Text style={headerStyles.postLikes}>{Number(likes).toLocaleString()} likes</Text>
                {
                    /*
                        If 
                        0 comment -> skip block
                        1 comment -> show comment
                        2 comments -> show both comments. no button
                        3+ comments -> 1st show all button last
                    */
                        comments.map((comment, index) => {
                    return(
                        <View style={headerStyles.commentContainer} key={index}>
                            <Text style={headerStyles.commentText}>
                                <Text style={headerStyles.commentAuthor}>{comment.author}</Text>
                                {" " + comment.comment}
                            </Text>
                        </View>
                    )
            })
                }
            </View>
        </View>
    )
}