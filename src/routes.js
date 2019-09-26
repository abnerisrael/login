import React, {Component} from 'react';
import  {BrowserRouter as Router, Route}  from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

export default class Routes extends Component {

    constructor(props) {
        super(props);
        this.state = { username:'', password:'' } ;
    }
    
    handleChangeDataUser = (e) => {
    
        const { name, value } = e.target;
        
        this.setState({
            [name]: value
        });
    
    }

    render() {
        return (
            <Router>
    
                <Route 
                    exact 
                    path="/" 
                    render={( props ) => (
                        <Login 
                            {...props} 
                            username={this.state.username} 
                            password={this.state.password} 
                            handleChangeDataUser={this.handleChangeDataUser} 
                        />
                    )} 
                />
                
                <Route 
                    path="/home" 
                    render={( props ) => (
                        <Home {...props} username={this.state.username} />
                    )} 
                />
    
            </Router>
        );
    }
    
}