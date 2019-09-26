import React, { Component } from 'react';
import './Login.css';
import 'typeface-roboto';
import { 
    Container, Grid, Paper, TextField, Button, Typography, 
  } from '@material-ui/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faReact } from "@fortawesome/free-brands-svg-icons";


export default class Login extends Component {

    handleInput = (e) => {
        this.props.handleChangeDataUser(e);

    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { username, password } = this.props;

        if(!username.length || !password.length) {
            return;
        }
        else {
            this.props.history.push('/Home');
        }

       
    }

    render() {

        return (
            <div className="main">

                <Container maxWidth="xs" style={{ paddingTop: '10%' }}>

                    <Paper style={{ padding: 20 }}>

                        <Typography component="h1" variant='h2' gutterBottom align="center">
                            App
                        </Typography>

                        <form onSubmit={ this.handleSubmit } autoComplete="off">

                            <Grid container justify="center">

                                <Grid item xs={12}>
                                    <TextField 
                                        type="text"
                                        name="username"
                                        label="Username"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        value={ this.props.username }
                                        onChange={ this.handleInput }
                                    />
                                </Grid>
                                
                                <Grid item xs={12}>
                                    <TextField 
                                        type="password"
                                        name="password"
                                        label="Password"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                        value={ this.props.password }
                                        onChange={ this.handleInput }
                                    />
                                </Grid>
                                
                                <Grid item xs={12} style={{ marginTop:15, marginBottom: 15 }}>
                                    <Button 
                                        type="submit" 
                                        variant="contained" 
                                        color="primary"
                                        fullWidth
                                    >
                                        Log in
                                    </Button>
                                </Grid>

                                <Grid container item justify="center" spacing={1}>
                                    <Grid item><FontAwesomeIcon icon={faReact} size="2x" /></Grid>
                                    <Grid item><FontAwesomeIcon icon={faGithub} size="2x" /></Grid>
                                </Grid>
                            
                            </Grid>

                        </form>

                    </Paper>
                    
                </Container>
            
            </div>
        );
    }
}