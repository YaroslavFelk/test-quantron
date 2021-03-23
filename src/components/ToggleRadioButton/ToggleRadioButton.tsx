import * as React from 'react';
import styled from "styled-components";

const ToggleRadioButton = ({onClick, name, active}: { onClick: any, name: string, active: boolean }) => {
  return <StockBlock>
    <ToggleSelect
      active={active}
      onClick={() => onClick(active)}
    />
    {name}
  </StockBlock>
};

const StockBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #333;
  margin-bottom: 20px;
`

export const ToggleSelect = styled.div<{ active: boolean }>`
  width: 38px;
  height: 21px;
  background: ${props => props.active ? 'green' : 'grey'};;
  border-radius: 24px;
  margin-right: 12px;
  position: relative;
  transition: all 0.1s;


  &:before {
    position: absolute;
    content: '';
    width: 13px;
    height: 13px;
    left: ${props => props.active ? 'calc(100% - 17px)' : '4px'};
    top: 4px;
    border-radius: 50%;
    background: #fff;
    transition: left 0.1s;
  }
`

export default ToggleRadioButton;
