import React, { useContext, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Context } from "../contexts/BlogContext";

const CreateScreen = ({navigation})=> {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const {addBlogPost} = useContext(Context)

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
            title="Create"
            onPress={() => addBlogPost(title, content, () => {
                navigation.navigate('IndexScreen')
            })}    
        />
    </View>
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

export default CreateScreen