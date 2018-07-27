import React from 'react'
import Articles from "./routes/Articles"
import UserForm from "./UserForm"
// import Select from 'react-select'
import './Article/style.css'
import ReactDatePicker from './ReactDatePicker'
import CommentForm from './CommentForm'
import NotFound from './routes/NotFound'
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/datepicker'>datepicker</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/commentform'>comment form</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/articles'>article list</NavLink></div>
                        <div><NavLink activeStyle = {{color: 'red'}} to='/userform'>user form</NavLink></div>
                    </div>
                    <Switch>
                        <Route path = '/datepicker' component = {ReactDatePicker}/>
                        <Route path = '/commentform' component = {CommentForm}/>
                        <Route path = '/articles' component = {Articles}/>
                        <Route path = '/userform' component = {UserForm}/>
                        <Route path = '*' component = {NotFound}/>
                        {/*<Route path = '/#' component = {App}/>*/}
                    </Switch>
                </div>
            </BrowserRouter>
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