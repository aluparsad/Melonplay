import React from 'react';
import '../sass/video_call.css';
// import MicIcon from "@mui/icons-material/Mic";

export default function Video_call() {
    return (
        <>
            <div className="container">
                <div className="video-call">
                    <div className="frnd frnd-1"></div>
                    <div className="frnd frnd-2"></div>
                    <div className="frnd frnd-3"></div>
                    <div className="frnd frnd-4"></div>
                </div>
                <div className="right">
                    <div className="video-members">
                        <div className="video-heading">
                            <h3>Participants (5)</h3>
                        </div>
                        <div className="participants">
                            <div className="participant">Rohit sharma
                                <i class="fa-solid fa-microphone"></i>
                            </div>
                            <div className="participant">Harsh sharma</div>
                            <div className="participant">yogesh swami</div>
                            <div className="participant">anand</div>
                            <div className="participant">nikhil</div>
                        </div>
                    </div>
                    <div className="chatting">
                        <div className="chat-heading">
                            <h3>Chat</h3>
                        </div>
                        <div className="chats">
                            <div className="message-right">Rohit : hello how are you</div>
                            <div className="message-left">dogesh : i am fine</div>
                        </div>
                        <div className="message">
                            <input type="text" placeholder='Type to write a message' />
                            <button className="btn">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}