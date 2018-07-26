import React, {Component} from 'react'
import ArticleList from "../ArticleList"
import Article from '../Article'
import {Route} from 'react-router-dom'

class Articles extends Component {

    render() {
        return (
            <div ref = 'container'>
                <ArticleList />
                <Route path = '/articles/:id' component = {this.getArticle}/>
            </div>
        )
    }

    getArticle = ({match}) => {
        const {id} = match.params
        return <Article id = {id} isOpen />
    }
}

export default Articles