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
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <Container>
        <Header />
      </Container>
    </>
  );
};

export default HomeScreen;
