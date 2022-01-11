import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import NewPostTitle from '../components/new-post-components/NewPostTitle';
import { newPostStyles } from '../styles/new-post/NewPostScreenStyles';
import { Formik } from 'formik';
import NewPostForm from '../components/new-post-components/NewPostForm';

export default function NewPost() {
    return(
        <SafeAreaView style={newPostStyles.container}>
            <NewPostTitle/>
            <NewPostForm/>
        </SafeAreaView>
    )
}