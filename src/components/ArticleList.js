import React from 'react'
import Article from './Article'

class ArticleList extends React.Component {
    state = {
        openArticleId: null
    }

	render() {
        const articleElements = this.props.articles.map(article => <li key = {article.id}>
            <Article
                article = {article}
                isOpen = {article.id === this.state.openArticleId}
                toggleOpen = {this.toggleOpenArticle.bind(this, article.id)}
            />
        </li>
        )
        return  <ul>{articleElements}</ul>
    }

    toggleOpenArticle(openArticleId) {
        this.setState({openArticleId})
    }
}

// function ArticleList({articles}) {
// 	const articleElements = articles.map((article) =>
//         <li key = {article.id}><Article article = {article}/></li>)
//     return  <ul>{articleElements}</ul>
// }

export default ArticleList