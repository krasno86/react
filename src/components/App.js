import React from 'react'
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
// import Select from 'react-select';
import './Article/style.css'
import ReactDatePicker from './ReactDatePicker'
import CommentForm from './CommentForm'

class App extends React.Component {
    render() {
        return (
            <div>
                <ReactDatePicker/>
                <CommentForm />
                <UserForm /><br/>
                {/*<Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} isMulti />*/}
                <ArticleList />
            </div>
        )
    }

    // changeSelection = selection => this.setState({selection})
}

export default App