import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { loginStyles } from '../../styles/login/LoginStyles';
import { useNavigation } from '@react-navigation/native';
import * as RootNavigation from '../../styles/utility/RootNavigation';

export class CTABtnStates {
    static Login = new CTABtnStates("Login")
    static SignUp = new CTABtnStates("SignUp")

    constructor(name) {
        this.name = name
    }
}

function getCTABtnStates(currentState) {
    switch(currentState) {
        case "Login":
            return {
                btnTitle: "Log In",
                promptText: "Don't have an account?",
                promptCTABtnText: "Sign Up",
                nextScreen: "SignUp"
            }
            break;
        case "SignUp":
            return {
                btnTitle: "Sign up",
                promptText: "Already have an account?",
                promptCTABtnText: "Log In"
            }
            break;
    }
}

export default function CTABtnHelpText(props) {
    const { 
         btnTitle,
         promptText,
         promptCTABtnText,
         nextScreen } = getCTABtnStates(props.btnState.name)
    const navigation = useNavigation()
    return (
        <>
            <View style={loginStyles.ctaBtnContainer}>
                <TouchableOpacity 
                style={loginStyles.ctaButton(!props.isDisabled)}
                onPress={() => {
                        props.handleSubmit()
                    }}  
                disabled={props.isDisabled}
                >
                    <Text style={loginStyles.ctaBtnText}>{btnTitle}</Text>
                </TouchableOpacity>
            </View>
            <View style={loginStyles.ctaHelperTextContainer}>
                <Text>{ promptText }</Text>
                <TouchableOpacity onPress={() => {
                    if(nextScreen) {
                        RootNavigation.navigate(nextScreen)
                    }
                }}>
                    <Text style={loginStyles.ctaHelperActionText}>{ promptCTABtnText }</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}