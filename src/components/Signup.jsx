import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { red, green } from '@material-ui/core/colors'
import { TextField, Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { signUpUser, updateUserInfo } from '../utils/auth'
import userContext from './UserContext';
import '../sass/signup.css';
import { reload } from 'firebase/auth';


const theme = createTheme({
    palette: {
        primary: {
            main: green[800],
        },
        secondary: {
            main: red[300]
        },
    }
})

const Signup = () => {

    const { setUser } = useContext(userContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conPassword, setConfPassword] = useState('');
    const navigate = useNavigate();

    const register = () => {
        if (name && email && password && conPassword && email.includes('@') && password === conPassword) {
            signUpUser(email, password,
                (creds) => {
                    updateUserInfo({ displayName: name }, (userCreds) => {
                        setUser(userCreds)
                        navigate('/')
                    })
                },
                (err) => {
                    alert(err.message)
                    window.location.reload()
                })
        }
        else {
            alert("invalid creds")
            window.location.reload()
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <div className="signup-wrapper">
                <div className="signup-container">
                    <div className="text-signup">
                        <h2>Login or Join Now And enjoy! the experiance of a new way to digital media</h2>
                    </div>
                    <div className="signup">
                        <TextField className='signup-input' label="name" type="text" variant="filled" onChange={e => setName(e.target.value)} />
                        <TextField className='signup-input' label="email" type="email" variant="filled" onChange={e => setEmail(e.target.value)} />
                        <TextField className='signup-input' label="Password" type="password" variant="filled" onChange={e => setPassword(e.target.value)} />
                        <TextField className='signup-input' label="confirm password" type="password" variant="filled" onChange={e => setConfPassword(e.target.value)} />
                        <Button color="primary" className='signup-signupBtn' variant="contained" onClick={register}>register</Button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default Signup;