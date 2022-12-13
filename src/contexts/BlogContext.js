import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";


const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blogPost', payload: id})
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
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
        case 'edit_blogPost':
            return state.map((blogPost) => {
                if (blogPost.id === action.payload.id) {
                    return action.payload
                } else {
                    return blogPost
                }
            })
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
                                                    {addBlogPost, deleteBlogPost, editBlogPost}, 
                                                    [{title: 'Movies', content: 'RRR', id: 1}]
                                                    )