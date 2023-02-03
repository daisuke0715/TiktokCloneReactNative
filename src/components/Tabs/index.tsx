import React from 'react';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Image } from 'react-native';

const Container = styled.View`
  height: 59px;
  width: 100%;
  position: absolute;
  bottom: 25;
  z-index: 1;
  border-top-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.2);
  flex-direction: row;
`;

const Menu = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image.attrs({ resizeMode: 'contain' })`
  height: 32px;
`;

const AddIcon = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

const MenuText = styled.Text`
  font-size: 9px;
  margin-top: 0px;
  color: ${ props => (props.active ? '#fff': 'rgba(255, 255, 255, 0.6)')};
`;

const Border = styled(LinearGradient)`
  width: 44px;
  height: 28px;
  border-radius: 8px;
  align-items: center;
`;

const Button = styled.TouchableOpacity`
  width: 36px;
  height: 28px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const Tabs: React.FC = () => {
  return (
    <Container>
      <Menu>
        <Icon source={require('../../assets/icons/home.png')} />
        <MenuText active='true'>レコメンド</MenuText>
      </Menu>
      <Menu>
        <Icon source={require('../../assets/icons/discover.png')} />
        <MenuText active='true'>探す</MenuText>
      </Menu>

      <Menu>
        <Border
          start={{ x: 0.9, y: 0.5 }}
          locations={[0, 0.5, 0.5, 1]}
          colors={['#F42365', '#F42365', '#37d7cf', '#37d7cf']}
        >
          <Button>
            <AddIcon source={require('../../assets/icons/plus.png')}/>
          </Button>
        </Border>
      </Menu>

      <Menu>
        <Icon source={require('../../assets/icons/message.png')} />
        <MenuText active='true'>メッセージ</MenuText>
      </Menu>
      <Menu>
        <Icon source={require('../../assets/icons/profile.png')} />
        <MenuText active='true'>プロフィール</MenuText>
      </Menu>
    </Container>
  );
}

export default Tabs;
