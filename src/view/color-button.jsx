import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { colorChanged } from "../state/slices/color-slice";

const ColorButton = ({ color, children }) => {
  const dispatch = useDispatch();
  return (
    <Styles {...{ color, children }}>
      <button className={color} onClick={() => dispatch(colorChanged(color))}>
        {children}
      </button>
    </Styles>
  );
};

const Styles = styled.div`
  button {
    width: 100%;
    padding: 15px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 20px;
    font-weight: 800;
    background-color: ${({ color }) => color};
  }
`;

export default ColorButton;
