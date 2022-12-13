import React, { useState } from "react";  
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const BlogPostForm = ({initialValues, onSubmit})=> {
    const [title, setTitle] = useState(initialValues.title)
    const [content, setContent] = useState(initialValues.content)

    return <View styles = { styles.container}>
        <Text style = {styles.label} >Enter title:</Text>
        <TextInput
            style = {styles.input} 
            value = {title}
            onChangeText = {text => setTitle(text)}
        />
        <Text style = {styles.label} >Enter Content:</Text>
        <TextInput 
            style = {styles.input} 
            value = {content}
            onChangeText = {text => setContent(text)}
        />
        <Button
            title="Save Blog Post"
            onPress={() => onSubmit(title, content)}
        />
    </View>
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        fontSize: 18

    },
    label: {
        fontSize: 20,
        marginBottom: 8
    },
    container: {
        margin: 5,
    }
})

export default BlogPostForm