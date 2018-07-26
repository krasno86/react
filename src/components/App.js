import React from 'react'
import ArticleList from "./ArticleList";
import UserForm from "./UserForm";
// import Select from 'react-select';
import './Article/style.css'
import ReactDatePicker from './ReactDatePicker'
import CommentForm from './CommentForm'
import { HashRouter, Route, NavLink } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/datepicker'>datepicker</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/commentform'>comment form</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/articlelist'>article list</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/userform'>user form</NavLink></div>
                    </div>
                    <div className="root">
                        <Route path = '/datepicker' component = {ReactDatePicker}/>
                        <Route path = '/commentform' component = {CommentForm}/>
                        <Route path = '/articlelist' component = {ArticleList}/>
                        <Route path = '/userform' component = {UserForm}/>
                        {/*<Route path = '/#' component = {App}/>*/}
                    </div>
                </div>
            </HashRouter>
            // <Router>
            //     <div>
            //         <ReactDatePicker/>
            //         <CommentForm />
            //         <UserForm /><br/>
            //         {/*<Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} isMulti />*/}
            //         <ArticleList />
            //     </div>
            // </Router>
        )
    }

    // changeSelection = selection => this.setState({selection})
}

export default App