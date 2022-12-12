import React, { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import {Context} from "../contexts/BlogContext";
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = () => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context)
    return <View>
        <Button
            title="Add Blog"
            onPress={addBlogPost}
        ></Button>
        <FlatList 
            data={state}    
            keyExtractor = {(blogPost) => blogPost.title}
            renderItem = {({item}) => {
                return <View style = {styles.row}>
                    <Text style = {styles.title}>{item.title} - {item.id}</Text>
                    <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                        <EvilIcons style = {styles.icon} 
                                name="trash" 
                                size={24} 
                                color="black" />
                    </TouchableOpacity>
                    </View>
            }}
        >

        </FlatList>
    </View>
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        paddingVertical: 10,
        justifyContent: 'space-between',
        paddingLeft: 8,
        borderTopWidth:1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        size: 30
    }
})

export default IndexScreen