import React from 'react'
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";

class App extends React.Component {
    render() {
        return (
            <div ref = 'container'>
                <UserForm />
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }
}

export default App