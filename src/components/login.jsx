import React, { useState , useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { red, green } from '@material-ui/core/colors'
import { TextField, Button } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles'
import { signInUser } from '../utils/auth'
import userContext from './UserContext';
import '../sass/login.css';


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

const Login = () => {
    const {setUser } = useContext(userContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = () => {
        signInUser(email, password, (creds) => {
            setUser(creds.user)
            navigate("/");
        }, (err) => {
            alert(err.message)
            setUser(null)
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <div className="login-wrapper">
                <div className="login-container">
                    <div className="text-login">
                        <h2>Login or Join Now And enjoy! the experiance of a new way to digital media</h2>
                    </div>
                    <div className="login">
                        <TextField className='login-input' label="Email" type="email" variant="filled" onChange={e => setEmail(e.target.value)} />
                        <TextField className='login-input' label="Password" type="password" variant="filled" onChange={e => setPassword(e.target.value)} />
                        <Button color="primary" className='login-loginBtn' variant="contained" onClick={login}>Login</Button>
                        <Button href='/register' color="secondary" className='login-registerBtn' variant="outlined">Need and Account?</Button>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}


export default Login;