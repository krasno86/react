import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import toggleOpen from "../decorators/toggleOpen";

class Article extends React.Component {
	static propTypes = {
		 article: PropTypes.shape({
			 id: PropTypes.string.isRequired,
			 title: PropTypes.string.isRequired,
			 text: PropTypes.string.isRequired
		 }).isRequired
	}

	render() {
		const {article, isOpen, toggleOpen} = this.props
		return (
			<div>
				<h2>{article.title}</h2>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
				{this.getBody()}
			</div>
		)
	}

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
        	<section>
				{article.text}
				<CommentList comments = {article.comments}/>
        	</section>
    	)
    }
}

// function Article(props) {
// 	const {article} = props
//     return  <div>
// 				<h3>Имя: {article.name}</h3>
// 				<section>Возраст: {article.text}</section>
//     		</div>
// }
	
export default toggleOpen(Article)