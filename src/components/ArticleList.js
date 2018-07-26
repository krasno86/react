import React from 'react'
import Index from './Article/index'
import PropTypes from "prop-types"
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom'

class ArticleList extends React.Component {
    static propTypes = {
        //from connect
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        // toggleOpenItem: PropTypes.func.isRequired
    }

	render() {
        const { articles } = this.props
        const articleElements = articles.map(article =>
        <li key = {article.id}>
            <NavLink to = { `/articles/${article.id}` } activeStyle = {{color: 'red'}} >
                {article.title}
            </NavLink>
        </li>
        )
        return  <ul>{articleElements}</ul>
    }
}

export default connect(state => ({
    articles: state.articles
}))(ArticleList)