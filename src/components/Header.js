import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@mui/material';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
  const [user] = useAuthState(auth)
  return (
    <HeaderContainer>
    <HeaderLeft>
    <HeaderAvatar onClick={() => auth.signOut()}
    alt={user?.displayName}
    src={user?.photoURL}
    s>
      <Avatar className='avatar'/>
    </HeaderAvatar>
    <AccessTimeIcon/>
    </HeaderLeft>

    <HeaderSearch>
      <SearchIcon/>
      <input placeholder='Search' type="text" />
    </HeaderSearch>

    <HeaderRight>
    <HelpOutlineIcon/>
    </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  > .MuiSvgIcon-root {
    color: #fff;
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;
  > .MuiSvgIcon-root {
    color: #fff;
  }
  >input{
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    color: #fff;
  }
`;
const HeaderContainer = styled.div`
display: flex;
position: fixed;
width: 100%;
align-items: center;
justify-content: space-between;
padding: 10px 0;
background-color: var(--slack-color);
`
const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root{
    margin-left: auto;
    margin-right: 20px;
    color: #fff;
  }
`;
const HeaderAvatar = styled.div`
  .avatar {
    cursor: pointer;
  }
  .avatar:hover {
    opacity: 0.8;
  }
`;