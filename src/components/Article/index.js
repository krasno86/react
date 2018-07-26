import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from '../CommentList'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
// import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {connect} from 'react-redux'
import {deleteArticle} from '../../AC'

class Index extends PureComponent {
	static propTypes = {
	 	id: PropTypes.string.isRequired,
	 	//from connect
		article: PropTypes.shape({
			 id: PropTypes.string.isRequired,
			 title: PropTypes.string.isRequired,
			 text: PropTypes.string.isRequired
		 }).isRequired,
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}

	render() {
		const {article, isOpen, toggleOpen} = this.props
        if (!article) return null
		return (
			<div ref = 'container'>
				<h2 >{article.title}</h2>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
                <button onClick = {this.handleDelete}>Delete article</button>
                <ReactCSSTransitionGroup
                    transitionName="article"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={500}
				>
					{this.getBody()}
				</ReactCSSTransitionGroup>
			</div>
		)
	}

    handleDelete = () => {
        const {deleteArticle, article} = this.props
		deleteArticle(article.id)
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) {
            return null
        }
        return (
        	<section>
				{article.text}
				<CommentList comments = {article.comments}/>
        	</section>
    	)
    }
}

export default connect((state, ownProps) => ({
    article: state.articles.find(article => article.id === ownProps.id)
}), { deleteArticle })(Index)