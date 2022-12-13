import React, { useContext, useState } from "react";  
import BlogPostForm from "../components/BlogPostForm";
import { Context } from "../contexts/BlogContext";

const EditScreen = ({navigation})=> {
    const id = navigation.getParam('id')
    const {state, editBlogPost} = useContext(Context)
    const blogPost = state.find(blogPost => blogPost.id === id)

    return <BlogPostForm 
        initialValues = {blogPost}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop())
        }}
    />
}

export default EditScreen