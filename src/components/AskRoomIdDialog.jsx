import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { FaRegWindowClose as Cross } from 'react-icons/fa'
import '../sass/askRIDDialog.css'

const AskRoomIdDialog = ({ jr, close }) => {
    const [roomId, setRoomId] = useState('');
    const [focused, setFocused] = useState(false);

    const onClickJoinBtn = () => {
        if (roomId.length < 10) return;
        jr(roomId);
    }

    return (
        <>
            <div className="dialog-wrapper" >
                <div className="dialog-container">
                    <div className="title-dialog">
                        <h3>Enter Room Id</h3>
                        <Cross color='orange' id='dialog-close-btn' onClick={close} />
                    </div>
                    <TextField onChange={e => { setFocused(true); setRoomId(e.target.value) }} color='primary' type="text" id="roomIdInput" label="Room Id" variant="standard" required error={(roomId.length < 10) & (focused)} />
                    <Button onClick={onClickJoinBtn} variant='contained' className="contained-btn-join">Join</Button>
                </div>
            </div>
        </>
    );
}

export default AskRoomIdDialog;