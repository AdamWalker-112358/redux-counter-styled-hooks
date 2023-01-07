import React  from "react";
import styled from "styled-components";
import {useSelector} from 'react-redux'

const ColorDisplay = ({children}) => {
    const color = useSelector( state => state.color)
  return (
    <Styles color={color}>
      <div className="color-display">
        {/* {children} */}
      </div>
    </Styles>
  );
};

const Styles = styled.div`
  background-color: ${({color}) => color};
  border: 20px ${({color}) => color} solid;
  width: 200px;
  height: 100px;
  margin: 20px;
  border-radius: 5px;
  

  background-image: url('https://freesvg.org/img/1489944426.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;


`;

export default ColorDisplay;
