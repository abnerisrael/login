import React, { Component } from 'react';
import { 
    Typography, Container
} from '@material-ui/core';
import HeaderBar from '../components/HeaderBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default class Home extends Component {

    render() {
        return (
            <div>

                <HeaderBar handleLogoff={ this.props.history.goBack }/>

                <Container maxWidth="sm" style={{ paddingTop: 100 }}>
                    <Typography variant='h5' align="center">
                        Hello, {this.props.username}!
                    </Typography>

                    <Typography variant='body1' align="center">
                        Welcome to LoginApp, a simple login app developed with React and React Material UI.
                    </Typography>

                    <Typography variant='body2' align="center">
                        <FontAwesomeIcon icon={faGithub} size="6x" />
                        <br/>
                        <a href="https://github.com/abnerisrael/login.git" target="_blank">See the code on Github</a>                
                    </Typography>
                </Container>
                
            </div>
        );
    }

}