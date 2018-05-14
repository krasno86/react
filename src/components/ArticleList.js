// import React, {Component} from 'react'
import React from 'react'
import Article from './Article'

// class ArticleList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isOpen: false
//         }
//     }
//
// 	render() {
//
//         const body = this.state.isOpen && <h2>{propsValues.items}</h2>
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

function ArticleList({articles}) {
	const articleElements = articles.map((article) =>
        <li key = {article.id}><Article article = {article}/></li>)
    return  <ul>{articleElements}</ul>
}

export default ArticleList