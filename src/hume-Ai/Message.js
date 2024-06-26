import React, { useState, useEffect } from 'react';
import { useVoice } from '@humeai/voice-react';
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';
import SpeakerIcon from '@mui/icons-material/Speaker';
import { Button } from '@mui/material';

export default function Messages({ setValue }) {

  const value =  useVoice()
  const { messages, mute, unmute, sendResumeAssistantMessage, sendPauseAssistantMessage } = useVoice();
  const [isMute, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);


  const handlePause = () => {
    if (isPaused) {
      sendResumeAssistantMessage();
      console.log("Sending a resume_assistant_message");
      setIsPaused(false);
    } else {
      sendPauseAssistantMessage();
      console.log("Sending a pause_assistant_message");
      setIsPaused(true);
    }
    return;
  };
  console.log(messages)

  useEffect(() => {
    messages.forEach((msg, index) => {
      if (msg.type === 'assistant_message' && msg.message && msg.message.content) {
        console.log('Assistant Message', msg.message.content);
        setValue(msg.message.content);
      }
    });
  }, [messages, setValue]);

  const handleMuteSpeaker = () => {
    if (!isMute) {
      mute();
    }
    else {
      unmute()

    }

    setIsMuted(!isMute)
  };


  return (
    <div className="main-container">
      <div className="button-container">
        <button className="custom-button" onClick={handleMuteSpeaker}>
          {isMute ? <MicOffIcon /> : <MicIcon />}
        </button>
        {/* <Button variant='contained' onClick={handlePause}>Pause Assistant Voice</Button> */}


      </div>
      {messages.map((msg, index) => {
        if (msg.type === 'user_message' || msg.type === 'assistant_message') {
          return (
            <div key={msg.type + index}>
              {/* <div>User: {msg.message.role}</div>
              <div>{msg.message.content}</div> */}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

