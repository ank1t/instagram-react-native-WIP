import React from 'react';
import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    ctaBtnContainer: {
        flexDirection: "row",
    },
    ctaButton: isValid => ({
        backgroundColor: isValid ? "#0096f6" : "#9ACAF7",
        height: 40,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 10,
        alignItems: "center",
        justifyContent: 'center',
    }),
    ctaBtnText: {
        fontSize: 18,
        fontWeight: "600",
        color: "white"
    },
    icon: {
        height: 100,
        width: 100,
        marginTop: 80
    },
    ctaHelperTextContainer: {
        flexDirection: "row",
        marginTop: 35
    },
    ctaHelperActionText: {
        marginLeft: 5,
        color: "lightblue"
    },
    textInput: isValid => ({
        height: 40,
        marginHorizontal: 10,
        padding: 10,
        borderWidth: 0.5,
        borderColor: isValid ? "gray" : "red",
        fontSize: 17,
        fontWeight: "400",
        flex: 1,
        borderRadius: 5
    }),
    usernameContainer: {
        flexDirection: "row",
        marginTop: 80
    },
    passwordContainer: {
        flexDirection: "row",
        marginTop: 10
    },
    forgotPasswordContainer: {
        flexDirection: "row",
        marginBottom: 35,
        marginTop: 8,
        marginHorizontal: 10
    },
    forgotPassword: {
        flex: 1,
        textAlign: "right"
    }
})