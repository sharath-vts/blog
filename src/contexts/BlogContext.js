import React, { useReducer, useState } from "react";
import createDataContext from "./createDataContext";


const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'add_blogPost'})
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_blogPost':
            return [...state, { title: `Blog Post #${state.length + 1}` }]
        default:
            return state
    }
}

export const {Context, Provider} = createDataContext(reducer, {addBlogPost}, [])