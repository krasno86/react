import React from 'react'
import Comment from './Comment'

// class CommentList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false
//         }
//     }
//
// 	render() {
//
//         // const body = this.state.isOpen && <h2>{propsValues.items}</h2>
//
//         return (
// 	    	<div>
// 	    		<h2>
//                     {propsValues.title}
//                     <button onClick={this.handleClick}>
//                         {this.state.isOpen ? 'close': 'open'}
//                     </button>
//                 </h2>
//                 {body}
//                 <ul>
//                     {itemElements}
//                 </ul>
//     		</div>
// 	    )
//     }
//
//     handleClick = () => {
//         console.log('ergeghergh')
//         this.setState({
//             isOpen: !this.state.isOpen
//         })
//     }
// }

function CommentList({comments}) {
    const articleComments = comments.map((comment) =>
        <li key = {comment.id}><Comment comment = {comment}/></li>)
    return  <ul>{articleComments}</ul>
}

export default CommentList