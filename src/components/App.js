import React from 'react'
import ArticleList from "./ArticleList";

class App extends React.Component {
    static propTypes = {

    }

    render() {
        return (
            <div ref = 'container'>
               <ArticleList articles = {this.props.articles} />
            </div>
        )
    }
}

export default App