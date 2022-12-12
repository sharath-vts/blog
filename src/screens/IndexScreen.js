import React, { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import {Context} from "../contexts/BlogContext";

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context)
    return <View>
        <Text>IndexScreen </Text>
        <Button
            title="Add Blog"
            onPress={addBlogPost}
        ></Button>
        <FlatList 
            data={state}
            keyExtractor = {(blogPost) => blogPost.title}
            renderItem = {({item}) => {
                return <Text>{item.title}</Text>
            }}
        >

        </FlatList>
    </View>
}

export default IndexScreen