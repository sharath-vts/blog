import React, { useReducer, useState } from "react";

const BlogContext = React.createContext()


const reducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [...state, { title: `Blog Post #${state.length + 1}` }]
        default:
            return state
    }
}
export const BlogProvider = ({children}) => {
   const [blogPosts, dispatch] = useReducer(reducer, [])

   const addBlogPost = () => {
    dispatch({type: 'add_blogPost'})
}

    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost}}>
        { children}
    </BlogContext.Provider>
}

export default BlogContext;