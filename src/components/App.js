import React from 'react'
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
import Select from 'react-select';
import './article.css'
import ReactDatePicker from './ReactDatePicker'

class App extends React.Component {

    state = {
        selection: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div ref = 'container'>
                <ReactDatePicker/>
                <UserForm /><br/>
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} isMulti />
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }

    changeSelection = selection => this.setState({selection})
}

export default App