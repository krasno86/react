import React from 'react'
import Comment from './Comment'
import toggleOpen from "../decorators/toggleOpen";

class CommentList extends React.Component {
    static defaultProps = {
        comments:  []
    }

	render() {
        const text = this.props.isOpen ? 'hide comments' : 'show comments'
        return (
	    	<div>
                <button onClick={this.props.toggleOpen}>{text}</button>
                {this.getBody()}
    		</div>
	    )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        )
    }
}

// function CommentList({comments}) {
//     const articleComments = comments.map((comment) =>
//         <li key = {comment.id}><Comment comment = {comment}/></li>)
//     return  <ul>{articleComments}</ul>
// }

export default toggleOpen(CommentList)