import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";


const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogPost', payload: id})
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_blogPost', 
                payload: {
                    title: title,
                    content: content
                }})
        callback()
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [...state, 
                { 
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content 
                }]
        case 'delete_blogPost':
            return state.filter(blogPost => blogPost.id !== action.payload)
        default:
            return state
    }
}

export const {Context, Provider} = createDataContext(reducer, 
        {addBlogPost, deleteBlogPost}, 
        [])