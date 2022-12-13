import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context } from "../contexts/BlogContext";
import { EvilIcons } from '@expo/vector-icons';

const BlogDetails = ({navigation})=> {
    const id = navigation.getParam('id')
    const {state} = useContext(Context)
    const blogPost = state.find(blogPost => blogPost.id === id)
    return <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
    
}

BlogDetails.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate('EditScreen', { id : navigation.getParam('id')})}>
            <EvilIcons name="pencil" size={30} />
          </TouchableOpacity>
        ),
      };
}
const styles = StyleSheet.create({})

export default BlogDetails