import React, { useState } from 'react';
import { Text, TextInput, Image, View, Button } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik'
import { newPostStyles } from '../../styles/new-post/NewPostScreenStyles';

const PLACEHOLDER_IMG = require("../../assets/icons/newPost/upload-placeholder.png")

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, "Caption has reached the character limit")
})

export default function NewPostForm() {
    const [thumbnailUrl, setThumbnailUrl] = useState("")

    return (
        <Formik 
            initialValues={{caption: "", imageUrl: ""}}
            onSubmit={(values) => {console.log(values)}}
            validationSchema={uploadPostSchema}
            validateOnMount
        >
        {({handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
            <>
                <View style={newPostStyles.imgPreviewCaptionContainer}>
                    <Image source={thumbnailUrl ? { uri : thumbnailUrl } : PLACEHOLDER_IMG} 
                    style={newPostStyles.imgPreview}/>
                    <TextInput placeholder="Write a caption"
                    placeholderTextColor="gray"
                    multiline
                    style={[newPostStyles.textInput, {marginVertical: 10, marginHorizontal: 10}]}
                    onChangeText={handleChange('caption')}
                    onBlur={handleBlur('caption')}
                    value={values.caption}
                />
                </View>
                <View style={newPostStyles.urlTextInputContainer}>
                    <TextInput placeholder="Enter a URL"
                    onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
                    placeholderTextColor="gray"
                    style={newPostStyles.textInput}
                    onChangeText={handleChange('imageUrl')}
                    onBlur={handleBlur('imageUrl')}
                    value={values.imageUrl}
                    />
                </View>
                {errors.imageUrl && (
                    <Text style={{fontSize: 10, color: 'red', marginHorizontal: 20, marginTop: 5}}>
                        {errors.imageUrl}
                    </Text>
                )}
                <Button title="Share"
                onPress={handleSubmit}
                disabled={!isValid}
                />
            </>
        )}
        </Formik>
    )
}