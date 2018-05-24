import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentList from './CommentList'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Article extends PureComponent {
	static propTypes = {
		 article: PropTypes.shape({
			 id: PropTypes.string.isRequired,
			 title: PropTypes.string.isRequired,
			 text: PropTypes.string.isRequired
		 }).isRequired,
		isOpen: PropTypes.bool,
		toggleOpen: PropTypes.func
	}

    // shouldComponentUpdate(nextProps, nextState) {
	 //    return nextProps.isOpen !== this.props.isOpen
    // }

	render() {
		const {article, isOpen, toggleOpen} = this.props
        // console.log('update article')
		return (
			<div ref = 'container'>
				<h2 >{article.title}</h2>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'close' : 'open'}
                </button>
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

    componentDidMount() {
        // console.log('componentDidMount')
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) {
            console.log('close')
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

export default Article