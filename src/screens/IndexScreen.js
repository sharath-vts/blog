import React, { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import BlogContext from "../contexts/BlogContext";

// const IndexScreen = () => {
//     const context = useContext(BlogContext)
//     const blogPosts = context.data
//     const addBlogPost = context.addBlogPost
//     console.log(blogPosts);
//     return (
//         <View>
//             <Text>IndexScreen {blogPosts.length} blogs</Text>
//             <Button
//                 title="Add Blog"
//                 onPress= { addBlogPost}
//             ></Button>
//             <FlatList 
//                 data={ blogPosts}
//                 keyExtractor = {(item)=>item.title}
//                 renderItem = {({item})=> {
//                     return <Text>{item.title}</Text>
//                 }}
//             />
//         </View>
//     )

// }

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext)
    return <View>
        <Text>IndexScreen </Text>
        <Button
            title="Add Blog"
            onPress={addBlogPost}
        ></Button>
        <FlatList 
            data={data}
            keyExtractor = {(blogPost) => blogPost.title}
            renderItem = {({item}) => {
                return <Text>{item.title}</Text>
            }}
        >

        </FlatList>
    </View>
}

export default IndexScreen