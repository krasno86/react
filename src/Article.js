import React from 'react'
import CommentList from './CommentList'

class Article extends React.Component {
	state = {
		isOpen: true,
		isOpenComments: true
	}

	render() {
		const {article} = this.props
        const {isOpen} = this.state
        const {isOpenComments} = this.state
		// const body = this.state.isOpen && <section>{article.text}</section>
		return (
			<div>
				<h2>{article.title}
					<button onClick={this.handleClick}>
						{isOpen ? 'close' : 'open'}
					</button>
				</h2>
				{this.getBody()}

				<button onClick={this.handleClick2}>
					{isOpenComments ? 'open' : 'close'}
				</button>

                {this.getComment()}
			</div>
		)
	}

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return  <section>{article.text}</section>
    }

    getComment() {
        if (this.state.isOpenComments) return null
        const {article} = this.props
        return  <div><CommentList comments = {article.comments}/></div>
    }

	handleClick = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

    handleClick2 = () => {
        this.setState({
            isOpenComments: !this.state.isOpenComments
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