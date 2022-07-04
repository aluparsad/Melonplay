import React from 'react'
import '../sass/About.css';

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="services">
          <h2>Our Services</h2>
        </div>
        <div className="about-video-call">
          <div className="video-call-text">
            <h2>Video Call</h2>
            <p>
              <h5></h5> Provides the Unlimited Video Calling with Your Friends , Colleagues & Team Members AnyTime & AnyWhere. With <h5></h5> You Can Attend Meeting With Your auto 5 Members At a Time.
            </p>
          </div>
          <div className="video-call-image"></div>
        </div>
        <div className="about-chatting">
          <div className="chatting-image"></div>
          <div className="chatting-text">
            <h2>Live Chatting</h2>
            <p>
              With <h5></h5> You Can Chat Symonteiously With Video Call. You Can Send Text At the Time of Video Calling.
              <h5></h5>
              Provides The Feature of Sending Text Messages to Your Friends. And The Group Chat Feature Also Comming Soon!!.
            </p>
          </div>
        </div>
        <div className="about-media-stream">
          <div className="media-stream-text">
            <h2>Media Stream</h2>
            <p>
              <h5></h5> Allows You Stream Media With Your Friends & Colleagues & Watch Any Movie Together.Parallely You Chat With Them.
            </p>
          </div>
          <div className="media-stream-image">
          </div>
        </div>
      </div>
    </>
  )
}
