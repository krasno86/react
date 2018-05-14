import React from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'

class Article extends React.Component {
	static propTypes = {
		 article: PropTypes.shape({
			 id: PropTypes.string.isRequired,
			 title: PropTypes.string.isRequired,
			 text: PropTypes.string.isRequired
		 }).isRequired
	}

	state = {
		isOpen: true
	}

	render() {
		const {article} = this.props
        const {isOpen} = this.state
		return (
			<div>
				<h2>{article.title}
					<button onClick={this.handleClick}>
						{isOpen ? 'close' : 'open'}
					</button>
				</h2>
				{this.getBody()}
			</div>
		)
	}

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return (
        	<section>
				{article.text}
				<CommentList comments = {article.comments}/>
        	</section>
    	)
    }



	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}

// function Article(props) {
// 	const {article} = props
//     return  <div>
// 				<h3>Имя: {article.name}</h3>
// 				<section>Возраст: {article.text}</section>
//     		</div>
// }
	
export default Article