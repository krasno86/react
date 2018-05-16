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

	componentWillMount() {
		console.log('componentWillMount')
	}

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', this.props, nextProps.isOpen, this.props.article)
    }

	render() {
		const {article, isOpen, toggleOpen} = this.props
		return (
			<div ref = 'container'>
				<h2>{article.title}</h2>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
				{this.getBody()}
			</div>
		)
	}

    componentDidMount() {
        console.log('componentDidMount')
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

export default  Article