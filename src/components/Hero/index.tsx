import React, { useState } from 'react';
import styled from 'styled-components/native';
import ViewPager from  'react-native-pager-view';
import { Dimensions, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import VideoPlayer from '../../components/VideoPlayer';
import Info from '../../components/Info';
import Video from '../../types/Video';
import Sidebar from '../../components/Sidebar';

const height = Dimensions.get(`window`).height;

const Container = styled(ViewPager)`
  height: ${height}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const Center = styled.View`
  flex: 1;
  flex-direction: row;
`;

interface Props {
  videos: Video[];
}


const Hero: React.FC<Props> = ({ videos }) => {
  const [selected, setSelected] = useState<number>(0);  
  return (
    <Container
      orientation='vertical'
      onPageSelected={e => setSelected(e.nativeEvent.position)}
      initialPage={0}
    >
      { videos.map((item, index) => {
        return (
          <View key={index}>
            <VideoPlayer
              source={item.source}
              poster={item.poster}
              isPlay={selected === index}
            />
            <Gradient
              locations={[0, 0.26, 0.6, 1]}
              colors={[
                'rgba(26,26,26,0.6)',
                'rgba(26,26,26,0)',
                'rgba(26,26,26,0)',
                'rgba(26,26,26,0.6)'
              ]}
            >
              <Center>
                <Info info={item.info} />
                <Sidebar avatar={item.info.avatar} count={item.count}/>
              </Center>
            </Gradient>
          </View>
        )
      })}
    </Container>
  );
}

export default Hero;