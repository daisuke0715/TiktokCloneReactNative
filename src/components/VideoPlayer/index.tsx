import React, { useState } from 'react';
import Video from 'react-native-video';
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  activeOpacity: 1;
`;

const Play = styled(Video)`
  height: 100%;
`;

const Poster = styled.ImageBackground`
  height: 100%;
`;

interface Props {
  source: number;
  poster: number;
  isPlay: boolean;
}


const VideoPlayer: React.FC<Props> = ({ source, poster, isPlay }) => {
  return isPlay ? (
    <Container>
      <Play
        source={source}
        rate={1.0}
        resizeMode={'cover'}
        repeat={true}
      />
    </Container>
  ) : (<Poster source={poster} />);
}

export default VideoPlayer;