import {normalizedComments as defaultComments} from '../fixtures'
import {} from '../constants'

const commentMap = defaultComments.reduce((acc, comment) => {
    acc[comment.id] = comment
    return acc
}, {})

export default (commentsState = commentMap, action) => {
    const {type, payload} = action

    switch (type) {

    }

    return commentsState
}