import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { loginStyles } from '../../styles/login/LoginStyles';

export default function CTABtnHelpText(props) {
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
                    <Text style={loginStyles.ctaBtnText}>Log In</Text>
                </TouchableOpacity>
            </View>
            <View style={loginStyles.ctaHelperTextContainer}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={loginStyles.ctaHelperActionText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}