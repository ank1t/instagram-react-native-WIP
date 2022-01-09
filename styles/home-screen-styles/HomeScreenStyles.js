import React from 'react';
import { StyleSheet } from 'react-native';
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

export const headerStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: "black"
    },
    headerContainer: {
        backgroundColor: "black",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 60
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: 25
    },
    homeIconImage: {
        width: 100,
        height: 50,
        resizeMode: "contain"
    },
    homeHeaderCTABtnsContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20
    },
    tripleCTABtns: {
        width: 30,
        height: 30,
        marginHorizontal: 5
    },
    storiesContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 90,
        width: "100%",
        backgroundColor: "black",
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
        paddingBottom: 5
    },
    storyContainer: {
        width: 60,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center"
    },  
    storyImgStyle: {
        height: 60,
        width: 60, 
        borderRadius: 35,
        resizeMode: "contain",
        borderWidth: 1,
        borderColor: "#FF8501"
    },
    storyTextStyle: {
        fontSize: 12,
        fontWeight: "600",
        color: "darkgray",
        textAlign: "center",
        marginTop: 2
    },
    bottomTabContainer: {
        borderTopWidth: 1,
        borderTopColor: "#a9a9a9",
        width: "100%",
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 0,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    bottomTabImage: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    postContainer: {
        flex: 1,
        backgroundColor: "black",
        width: "100%",
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        paddingBottom: 5
    },
    postProfileInfoContainer: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 10,
        justifyContent: "space-between",
        alignItems: "center"
    },
    postProfileImgTitleContainer: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row"
    },
    postTitle: {
        fontSize: 12,
        fontWeight: "bold",
        color: "white",
        marginLeft: 5
    },
    postOptionsText: {
        color: "white"
    },
    postImage: {
        width: "100%",
        height: 400,
        resizeMode: "cover",
        backgroundColor: "white"
    },
    postBottomContainer: {
        marginVertical: 10,
        marginHorizontal: 5
    },
    postActionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    postLikes: {
        fontSize: 14,
        fontWeight: "600",
        color: "white",
        marginLeft: 10,
        marginTop: 5
    },
    commentContainer: {
        marginTop: 5,
        marginHorizontal: 10
    },
    commentAuthor: {
        fontSize: 15,
        fontWeight: "600",
        color: "#EEEEEE"
    },
    commentText: {
        fontSize: 15,
        fontWeight: "300",
        color: "white"
    },
    viewAllBtn: {
        fontSize: 14,
        fontWeight: "400",
        color: "gray",
        marginTop: 5

    },
    unreadBadgeContainer: {
        position: "absolute",
        left: 15,
        bottom: 22,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 30,
        zIndex: 100,
        paddingHorizontal: 5,
        paddingVertical: 1
    },
    unreadBadgeText: {
        color: 'white',
        fontWeight: "600"
    }
})