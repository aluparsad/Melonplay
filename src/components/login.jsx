import React, { useState , useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import { signInUser } from '../utils/auth'
import userContext from './UserContext';
import '../sass/login.css';


const Login = () => {
    const {setUser , setNavVisible} = useContext(userContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        setNavVisible(false);
        return () => {
            setNavVisible(true);
        }
    }, [])

    const navigate = useNavigate();
    
    const login = () => {
        signInUser(email, password, (creds) => {
            setUser(()=>creds.user)
            navigate("/");
        }, (err) => {
            alert(err.message)
            setUser(null)
        })
    }

    return (
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
    )
}
export default Login;