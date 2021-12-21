import React from 'react';
import { StyleSheet } from 'react-native';

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
        height: 70
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: "center",
        marginLeft: 15
    },
    homeIconImage: {
        width: 120,
        height: 50,
        resizeMode: "contain"
    },
    homeHeaderCTABtnsContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20
    },
    homeHeaderCTABtns: {
        width: 30,
        height: 30,
        marginHorizontal: 5
    }
})