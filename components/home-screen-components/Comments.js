import React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { headerStyles } from "../../styles/home-screen-styles/HomeScreenStyles";

export default function Comments(props) {
  const comments =
    props.postComments === undefined ? [] : props.postComments.commentList;
  if (comments.length == 0) {
    return <></>;
  }

  return comments.map((comment, index, array) => {
    return (
      <View style={headerStyles.commentContainer}>
        <Text style={headerStyles.commentAuthor} key={index}>
          {comment.author}{" "}
          <Text style={headerStyles.commentText}>{comment.comment}</Text>
        </Text>
      </View>
    );
  });
}
