import React from 'react'
import CommentList from './CommentList'

class Article extends React.Component {
	state = {
		isOpen: true
	}

	render() {
		const {article} = this.props
        const {isOpen} = this.state
		// const body = this.state.isOpen && <section>{article.text}</section>
		return (
			<div>
				<h2>{article.title}
					<button onClick={this.handleClick}>
						{isOpen ? 'close' : 'open'}
					</button>
				</h2>
				{this.getBody()}
				<div>
					<CommentList comments = {article.comments}/>
				</div>
			</div>
		)
	}

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return  <section>{article.text}</section>
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