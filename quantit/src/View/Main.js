import React, { useState } from 'react';
import styled from 'styled-components';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px 10px;
  position: relative;
  .main__search {
    border: 0;
    border-bottom: 1px solid #000;
    width: 1280px;
    height: 30px;
    font-size: 16px;
  }
  .main__plus {
    position: absolute;
    top: 25px;
    right: 300px;
    color: rgba(0, 0, 0, 0.5);
  }
  .main__item {
    padding: 20px 10px;
    width: 1280px;
    margin: 0 auto;
    text-align: left;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
  .main__item__checkbox {
    margin-right: 20px;
    width: 18px;
    height: 18px;
    border: 0;
    outline: 2px solid #000;
  }
`;

const Main = () => {
  const [Data, setData] = useState([]);
  const [Done, setDone] = useState([]);
  const [isClick, setisClick] = useState(false);

  const handleChange = (event) => {
    setData(event.target.value);
  };

  return (
    <MainContainer>
      <form>
        <input
          className="main__search"
          type="search"
          placeholder="Add an item"
          onChange={(e) => handleChange(e)}
        ></input>
        <FontAwesomeIcon icon={faPlusCircle} className="main__plus" />
      </form>
      {Done.map((el, i) => {
        return (
          <div className="main__item" key={i}>
            <input type="checkbox" className="main__item__checkbox" />
            {el}
          </div>
        );
      })}
    </MainContainer>
  );
};

export default Main;
