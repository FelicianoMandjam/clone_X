import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import Home from './pages/home/Home';
import Layout from './components/layout';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const socket = io('http://localhost:5173');

function App() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    socket.on('tweet', (tweet) => {
      setTweets((prevTweets) => [tweet, ...prevTweets]);
    });

    return () => {
      socket.off('tweet');
    };
  }, []);

  const handleNewTweet = (tweet) => {
    socket.emit('tweet', tweet);
  };

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home tweets={tweets} onNewTweet={handleNewTweet} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
