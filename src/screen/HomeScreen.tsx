import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Container = styled.View`
  flex: 1;
  background: orange;
`;

const HomeScreen: React.FC = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor='transparent'
        barStyle='light-content'
      />
      <Container>
        <Header />
        <Hero />
      </Container>
    </>
  );
};

export default HomeScreen;
