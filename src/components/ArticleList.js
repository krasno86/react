import React from 'react'
import Index from './Article/index'
import accordion from "../decorators/accordion";
import PropTypes from "prop-types";

class ArticleList extends React.Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        //from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }

	render() {
        const { articles, openItemId, toggleOpenItem } = this.props
        const articleElements = articles.map(article => <li key = {article.id}>
            <Index
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>
        )
        return  <ul>{articleElements}</ul>
    }
}

export default accordion(ArticleList)