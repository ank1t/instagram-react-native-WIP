import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CTABtnHelpText from "../components/login-components/CTABtnHelpText";
import { loginStyles } from "../styles/login/LoginStyles";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

export default function SignUp() {
  const navigation = useNavigation();
  const LOGO_URL =
    "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png";
  const loginSchema = Yup.object().shape({
    email: Yup.string().email().required(),
    username: Yup.string().min(2).max(20).required(),
    password: Yup.string().required().min(6)
  });
  return (
    <Formik
        initialValues={{email: "", username: "", password: ""}}
        onSubmit={(values) => {
            console.log(values)
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
                values.email.length < 1 || Validator.validate(values.email)
            )}
            placeholder="Phone number or email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            clearButtonMode="while-editing"
          />
        </View>

        <View style={loginStyles.passwordContainer}>
          <TextInput
            style={loginStyles.textInput(
                values.username.length < 1 || (values.username.length >= 2 && values.username.length <= 20)
            )}
            textContentType="username"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Username"
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
        <CTABtnHelpText handleSubmit={handleSubmit} isDisabled={!isValid}/>
      </SafeAreaView>
    )}  
    </Formik>
  );
}
