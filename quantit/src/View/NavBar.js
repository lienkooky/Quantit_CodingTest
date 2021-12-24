import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  height: 63px;
  background-color: #2096f3;
  display: flex;
  align-items: center;
  > span {
    padding: 15px;
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    margin-left: 50px;
  }
`;

const NavBar = () => {
  return (
    <NavbarContainer>
      <span>Dashboard</span>
    </NavbarContainer>
  );
};

export default NavBar;
