import React from 'react';
import '../sass/video_call.css';
import { FaHeart, FaMicrophone, FaVideo, FaComment, FaMicrophoneSlash, FaVideoSlash, FaShareSquare } from 'react-icons/fa';

export default function Video_call() {
    return (
        <>
            <div className="video-call-container">
                <div className="video-call-left">
                    <div className="video-call">
                        <div className="friend friend-1">
                            <div className="frnd1-icons">
                                <div className="frnd-mic">
                                    <FaMicrophone size={20} />
                                </div>
                                <div className="frnd-video">
                                    <FaVideo size={20} />
                                </div>
                            </div>
                        </div>
                        <div className="friend friend-2">
                            <div className="frnd-icons">
                                <div className="frnd-mic">
                                    <FaMicrophone size={20} />
                                </div>
                                <div className="frnd-video">
                                    <FaVideo size={20} />
                                </div>
                            </div>
                        </div>
                        <div className="friend friend-3">
                            <div className="frnd-icons">
                                <div className="frnd-mic">
                                    <FaMicrophone size={20} />
                                </div>
                                <div className="frnd-video">
                                    <FaVideo size={20} />
                                </div>
                            </div>
                        </div>
                        <div className="friend friend-4">
                            <div className="frnd-icons">
                                <div className="frnd-mic">
                                    <FaMicrophone size={20} />
                                </div>
                                <div className="frnd-video">
                                    <FaVideo size={20} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons">
                        <div className="buttons-section-mic">
                            <FaMicrophoneSlash size={28} />
                        </div>
                        <div className="buttons-section-video">
                            <FaVideoSlash size={28} />
                        </div>
                        <div className="buttons-section-screen-share">
                            <FaShareSquare size={28}/>
                        </div>
                        <button className="end-meeting">End Meeting</button>
                    </div>
                </div>
                <div className="participants-chats-right">
                    <div className="participants-section">
                        <div className="participant-heading">
                            <h2>Participants (4)</h2>
                        </div>
                        <div className="participants">
                            <div className="participant participant-1">
                                Rohit Sharma
                                <div className="participant-icons">
                                    <div className="participant-mic">
                                        <FaMicrophone size={20} />
                                    </div>
                                    <div className="participant-video">
                                        <FaVideo size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="participant participant-2">Anand Samadhiya
                                <div className="participant-icons">
                                    <div className="participant-mic">
                                        <FaMicrophone size={20} />
                                    </div>
                                    <div className="participant-video">
                                        <FaVideo size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="participant participant-3">Dogesh Swami
                                <div className="participant-icons">
                                    <div className="participant-mic">
                                        <FaMicrophone size={20} />
                                    </div>
                                    <div className="participant-video">
                                        <FaVideo size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="participant participant-4">Kamal Swami
                                <div className="participant-icons">
                                    <div className="participant-mic">
                                        <FaMicrophone size={20} />
                                    </div>
                                    <div className="participant-video">
                                        <FaVideo size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="participant participant-5">Nikhik Dhoopad
                                <div className="participant-icons">
                                    <div className="participant-mic">
                                        <FaMicrophone size={20} />
                                    </div>
                                    <div className="participant-video">
                                        <FaVideo size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="participant participant-6">Harsh Sharma
                                <div className="participant-icons">
                                    <div className="participant-mic">
                                        <FaMicrophone size={20} />
                                    </div>
                                    <div className="participant-video">
                                        <FaVideo size={20} />
                                    </div>
                                </div>
                            </div>
                            <div className="participant participant-5">Anshul Paliwal
                                <div className="participant-icons">
                                    <div className="participant-mic">
                                        <FaMicrophone size={20} />
                                    </div>
                                    <div className="participant-video">
                                        <FaVideo size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="chatting-section">
                        <div className="chat-heading">
                            {/* <div className="chat-icon">
                                <FaComment size={18} />
                            </div> */}
                            <h2>Chat</h2>
                        </div>
                        <div className="chats">
                            <div className="message message-right">Rohit : How Are You</div>
                            <div className="message message-left">Dogesh : I am fine</div>
                            <div className="message message-left">Dogesh : And You Say?</div>
                            <div className="message message-right">Rohit : I am Good</div>
                            <div className="message message-left">Dogesh : What are you Doing now?</div>
                            <div className="message message-right">Rohit : Nothing! just play playing games.</div>
                            <div className="message message-right">
                                Rohit : So , Howz You College Going?
                            </div>
                        </div>
                        <div className="input">
                            <input type="text" placeholder='Enter Message Here!' />
                            <button className="submit">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}