import React from 'react';
import { useVoice, VoiceReadyState } from '@humeai/voice-react';
import "./style.css"
import { Button } from '@mui/material';
export default function Controls() {
  const { connect, disconnect, readyState } = useVoice();
  
  return (
    <div className='main'>
      {readyState !== VoiceReadyState.OPEN ? (
        <Button 
        variant='contained'
          onClick={() => {
            connect()
              .then(() => {
                /* handle success */
              })
              .catch(() => {
                /* handle error */
              });
          }}
        >
          Start Session
        </Button>
      ) : (
        <Button variant='contained'
          onClick={() => {
            disconnect();
          }}
        >
          End Session
        </Button>
      )}
    </div>
  );
}
