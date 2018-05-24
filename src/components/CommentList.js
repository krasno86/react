import React from 'react'
import Comment from './Comment'
import toggleOpen from "../decorators/toggleOpen";

class CommentList extends React.Component {
    static defaultProps = {
        comments:  []
    }

    state = {
        username: '',
        commentText: ''
    }

	render() {
        const text = this.props.isOpen ? 'hide comments' : 'show comments'
        return (
	    	<div>
                <div className='newComment'>
                    Name: <input type = 'text' className='userName'
                                 value = {this.props.username}
                                 onChange = {this.handleUserName} /><br/><br/>
                    Comment: <input type = 'text' className='comment'
                                    value = {this.props.commentText}
                                    onChange = {this.handleAddComment} />
                </div>
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

    handleUserName = (ev) => {
        if (ev.target.value.length < 5 || ev.target.value.length > 15) return

        this.setState({
            username: ev.target.value
        })
        console.log(this.state.username)
    }

    handleAddComment = (ev) => {
        if (ev.target.value.length < 20 || ev.target.value.length > 50) return

        this.setState({
            username: ev.target.value
        })
    }
}

export default toggleOpen(CommentList)