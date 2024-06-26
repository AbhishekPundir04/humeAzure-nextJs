import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { fetchAccessToken } from '@humeai/voice';
import ClientComponent from './hume-Ai/ClientComponent';
import { Avatar } from './components/Avatar';

function App() {
  const [accessToken, setAccessToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState("");


  useEffect(() => {
    async function getAccessToken() {
      try {
        const token = await fetchAccessToken({
          apiKey: "9rHcUDZM3CS9OxrUSYujfy15H6prJaq2O09KOeyRWPzRrOgz",
          secretKey: "BrOAa0ds73Np9kvhOFCntdB1fagNsvfoA3Vg8RAWOrrUJBsps7yAQXlIMUBGXA3A",
        });
        if (!token) {
          throw new Error('Failed to fetch access token');
        }
        setAccessToken(token);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    getAccessToken();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      {/* <Avatar   value={value} setValue={setValue}/> */}
      {accessToken && <ClientComponent accessToken={accessToken}  value={value} setValue={setValue}/>}
    </div>
  );
}

export default App;

