import articles from '../fixtures'

export default (articleState = articles, action) => {
    const {type} = action

    switch (type) {
        case 'DELETE_ARTICLE': return articleState
    }

    return articleState
}