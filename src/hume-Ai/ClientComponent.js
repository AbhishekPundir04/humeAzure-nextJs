import React, { useState } from 'react';
import { VoiceProvider } from '@humeai/voice-react';
import Controls from './Controls';
import Messages from './Message';

export default function ClientComponent({ accessToken,setValue }) {
  
  return (
    <VoiceProvider auth={{ type: 'accessToken', value: accessToken }}>
      <Messages setValue={setValue} />
      <div className='flex justify-center items-center space-x-4'>
      <Controls />
      </div>
    </VoiceProvider>
  );
}
