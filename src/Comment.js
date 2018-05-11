import React from 'react'

function Comment({comment}) {
    return  <div><h3>{comment.text}</h3></div>
}

export default Comment


// import React from 'react'
//
// class Comment extends React.Component {
//     state = {
//         isOpen: true
//     }
//
//     render() {
//         const {comment} = this.props
//         const {isOpen} = this.state
//         // const body = this.state.isOpen && <section>{article.text}</section>
//         return (
//             <div>
//                 <h2>{comment.text}
//                     <button onClick={this.handleClick}>
//                         {isOpen ? 'close' : 'open'}
//                     </button>
//                 </h2>
//                 {this.getBody()}
//             </div>
//         )
//     }
//
//     getBody() {
//         if (!this.state.isOpen) return null
//         const {comment} = this.props
//         return  <section>{comment.text}</section>
//     }
//
//     handleClick = () => {
//         this.setState({
//             isOpen: !this.state.isOpen
//         })
//     }
// }
//
// export default Comment