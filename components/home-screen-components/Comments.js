import React from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { headerStyles } from "../../styles/home-screen/HomeScreenStyles";

export default function Comments(props) {
  const comments =
    props.postComments === undefined ? [] : props.postComments.commentList;
  const viewAllBtn = (index, hasMoreComments) =>
    index == 0 && hasMoreComments ? (
      <TouchableOpacity>
        <Text style={headerStyles.viewAllBtn}>View all comments</Text>
      </TouchableOpacity>
    ) : (
      <></>
    );
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
        {viewAllBtn(index, array.length == 2)}
      </View>
    );
  });
}
