import {normalizedComments as defaultComments} from './fixtures'
import {} from './constants'

const commentMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

// const commentMap = defaultComments.reduce((acc, comment) => {
//     acc.set(comment.id, comment)
//     return acc
// }, new Map())

// const commentMap = normalizedComments.reduce((acc, comment) => {
//     return acc.set(comment.id, comment)
// }, new Map())


export default (commentsState = commentMap, action) => {
    const {type, payload} = action

    switch (type) {

    }

    return commentsState
}