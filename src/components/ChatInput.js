import { Button } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import firebase from "firebase/compat/app";
import { useAuthState } from 'react-firebase-hooks/auth';

const ChatInput = ({channelName, channelId, chatRef}) => {
  const [input, setInput] = useState('')
  const [user] = useAuthState(auth)
  const sendMessage = e => {
    e.preventDefault()

    if (!channelId) {
      return false
    }
    db.collection("rooms")
      .doc(channelId)
      .collection("messages")
      .add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage:
          user.PhotoURL ||
          "https://p.kindpng.com/picc/s/235-2350646_login-user-name-user-avatar-svg-hd-png.png",
      });

    chatRef.current.scrollIntoView({
      behavior: 'smooth'
    })

    setInput('')
  }
  return (
    <ChatInputContainer>
      <form>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message ${channelName}`} type="text" />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form{
    position: relative;
    display: flex;
    justify-content: center;
  }

  >form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    padding: 20px;
    border: 1px solid gray;
    border-radius: 3px;
    outline: 0;
  }

  >form > button {
    display: none !important;
  }
`;