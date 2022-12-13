import React, { useReducer, useState } from "react";
import jsonserver from "../api/jsonserver";
import createDataContext from "./createDataContext";

const getBlogPosts = (dispatch) => {
    return async () => {
        try {
            const response = await jsonserver.get('/blogposts')
            dispatch({type: 'get_blogPosts', payload: response.data})    
        } catch (error) {
            console.log(error);
        }
    }
}

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonserver.delete(`/blogposts/${id}`)
        dispatch({type: 'delete_blogPost', payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonserver.put(`/blogposts/${id}`, {title,content})
        dispatch({type: 'edit_blogPost',
                 payload: {
                    id,
                    title,
                    content
                 }})
        callback()
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonserver.post('/blogposts', {title, content})
        callback()
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'get_blogPosts':
            return action.payload
        case 'edit_blogPost':
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) {
                    return action.payload
                } else {
                    return blogPost
                }
            })
        case 'delete_blogPost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        default:
            return state
    }
}

export const {Context, Provider} = createDataContext(reducer, 
                                                    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, 
                                                    [])