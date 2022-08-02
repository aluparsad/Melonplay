import React, {useState} from 'react';
import '../sass/Home.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {v4 as uuidV4} from 'uuid'
import AskRoomIdDialog from './AskRoomIdDialog'
import { useEffect } from 'react';

export default function Home() {

    const navigate  = useNavigate();
    
    const [Dialog, setDailog] = useState(null);

    const showDialog = () => {
        setDailog(()=>dialog);
    }
    const hideDialog = () => {
        setDailog(()=>null);
    }
    const joinRoom = (roomId) => {
        setDailog(()=>null);
        navigate(`join/${roomId}`);
    }

    const dialog = <AskRoomIdDialog jr={joinRoom} close={hideDialog} />;
    
    useEffect(()=>{
        setDailog(null)
    },[])
    
    const createRoom = () => {
        navigate(`videocall/${uuidV4()}`);
    };
    
    
   

    return (
        <>
                <div className="container">
                    <div className="left">
                        <div className="image">
                            
                        </div>
                    </div>
                    <div className="right">
                        <h3>Keeping You Connect
                            <br />WhereEver You Are!</h3>
                        <p>Unlimited Access of Video Calling & Screen Sharing.</p>
                        <p>Stream Media , Movies With Your Friends.</p>
                        <Button color="primary" variant="text" className="start-call-btn" onClick={createRoom} >
                            create Room
                        </Button>
                        <div className="bottom">
                            <div className="about">
                                <h5>Connect Your Remote Team & Save Time</h5>
                                <p>Talk With You Friends & Colleagues AnyWhere AnyTime.</p>
                            </div>
                            <Button onClick={showDialog} color="secondary" className="know-more">
                                join room
                            </Button>
                        </div>
                    </div>
                {Dialog}
                </div>
        </>
    )
}
