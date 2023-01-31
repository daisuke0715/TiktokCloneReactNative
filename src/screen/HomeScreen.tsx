import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';

const Container = styled.View`
  flex: 1;
  background: orange;
`;

const HomeScreen = () => {
  return (
    <Container>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <Header />
    </Container>
  );
};

export default HomeScreen;
