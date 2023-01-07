import React from "react";
import styled from "styled-components";
import ColorButton from "./color-button";


const ColorPicker = () => {
  
  return (
    <Styles>
      <ColorButton color="red">RED</ColorButton>
      <ColorButton color="green">GREEN</ColorButton>
      <ColorButton color="blue">BLUE</ColorButton>
      <ColorButton color="purple">PURPLE </ColorButton>
    </Styles>
  );
};

const Styles = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  gap: 10px;

  & > * {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

export default ColorPicker;
