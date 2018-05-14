import React from 'react'
import Comment from './Comment'

class CommentList extends React.Component {
    static defaultProps = {
        comments:  []
    }
    state = {
        isOpen: true
    }

	render() {
        const text = this.state.isOpen ? 'show comments': 'hide comments'
        return (
	    	<div>
                <button onClick={this.handleClick}>{text}</button>
                {this.getBody()}
    		</div>
	    )
    }

    getBody() {
        if (this.state.isOpen) return null

        const {comments} = this.props
        // if (!comments || !comments.length) return <p>No comments yet</p>

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        )
    }

    handleClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

// function CommentList({comments}) {
//     const articleComments = comments.map((comment) =>
//         <li key = {comment.id}><Comment comment = {comment}/></li>)
//     return  <ul>{articleComments}</ul>
// }

export default CommentList