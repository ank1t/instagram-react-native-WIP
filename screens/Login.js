import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CTABtnHelpText, { CTABtnStates } from "../components/login-components/CTABtnHelpText";
import { loginStyles } from "../styles/login/LoginStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase } from "../firebase"

export default function Login() {
  const navigation = useNavigation();
  const LOGO_URL =
    "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";
  const loginSchema = Yup.object().shape({
    username: Yup.string().email().required(),
    password: Yup.string().required().min(6)
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log("Firebase login successful", email, password)
    } catch (error) {
       Alert.alert(
         "Login failed",
         error.message + "\n What would you like to do next?",
         [
           {
            text: "Ok",
            onPress: () => console.log("Do nothing"),
            style: "cancel"
           },{
            text: "Sign Up",
            onPress: () => navigation.push("SignUp"),
            style: "default"
           }
         ]
       )
    }
  }

  return (
    <Formik
        initialValues={{username: "", password: ""}}
        onSubmit={(values) => {
            onLogin(values.username, values.password)
        }}
        validationSchema={loginSchema}
        validateOnMount
    >
    {({handleChange, handleBlur, handleSubmit, values, isValid}) => (
        <SafeAreaView style={loginStyles.container}>
        <Image source={{ uri: LOGO_URL }} style={loginStyles.icon} />
        <View style={loginStyles.usernameContainer}>
          <TextInput
            style={loginStyles.textInput(
                values.username.length < 1 || Validator.validate(values.username)
            )}
            placeholder="Phone number, username or email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            clearButtonMode="while-editing"
          />
        </View>
        <View style={loginStyles.passwordContainer}>
          <TextInput
            style={loginStyles.textInput(
                values.password.length < 1 || values.password.length >= 6
            )}
            secureTextEntry
            textContentType="password"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Password"
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
            clearButtonMode="while-editing"
          />
        </View>
        <TouchableOpacity style={loginStyles.forgotPasswordContainer}>
          <Text style={loginStyles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <CTABtnHelpText 
          handleSubmit={handleSubmit} 
          isDisabled={!isValid} 
          btnState={CTABtnStates.Login}
        />
      </SafeAreaView>
    )}  
    </Formik>
  );
}
