import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  top: 22px;
  width: 100%;
  justify-content: center;
  align-item: center;
  flex-direction: row;
  position: absolute;
  z-index: 1;
`;

const Menu = styled.Text`
  color: #fff;
  letter-spacing: 0.8px;
  margin: 30px 12px;
  font-weight: ${props => (props.bold ? 'bold': 'normal')};
  opacity: ${props => (props.bold ? 1: 0.8)};
  font-size: ${props => (props.bold ? '16px': '15px')};
`;

const Separator = styled.View`
  width: 1px;
  height: 13px;
  background: #d8d8d8;
  opacity: 0.6;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>フォロー中</Menu>
      <Separator />
      <Menu bold='true'>おすすめ</Menu>
    </Container>
  )
};

export default Header;