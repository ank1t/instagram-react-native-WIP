import React from "react";
import { StyleSheet } from "react-native";

export const newPostStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    navBarContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        marginHorizontal: 15
    },
    navBarTitle: {
        color: "white",
        fontSize: 17,
        fontWeight: "700"
    },
    navBarBackBtn: {
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    imgPreviewCaptionContainer: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "gray",
    },
    urlTextInputContainer: {
        marginHorizontal: 20,
        flexDirection: "row"
    },
    imgPreview: {
        width: 100,
        height: 100
    },
    textInput: {
        color: "white",
        flex: 1,
        fontSize: 17
    }
})