import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context } from "../contexts/BlogContext";
import BlogPostForm from '../components/BlogPostForm.js'

const CreateScreen = ({navigation})=> {
    const {addBlogPost} = useContext(Context)

    return <BlogPostForm 
        onSubmit = {(title, content) => {
            addBlogPost(title, content, () => navigation.navigate('IndexScreen'))
        }}
    />
}



export default CreateScreen