import Video from '../types/Video';

const api: Video[] = [
  {
    id: 0,
    source: require('../assets/videos/01.mp4'),
    poster: require('../assets/poster/01.jpg'),
    info: {
      userName: 'hogehoge',
      description: 'DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription',
      music: 'hoge',
      artist: 'hoge',
      avatar: require('../assets/avatar/01.jpg'),
    },
    count: {
      like: '1.1M',
      comment: '4080',
      share: '2800'
    },
  },
  {
    id: 1,
    source: require('../assets/videos/02.mp4'),
    poster: require('../assets/poster/02.jpg'),
    info: {
      userName: 'fugafuga',
      description: 'DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription',
      music: 'fuga',
      artist: 'fuga',
      avatar: require('../assets/avatar/02.jpg'),
    },
    count: {
      like: '380K',
      comment: '2388',
      share: '535',
    }
  },
  {
    id: 1,
    source: require('../assets/videos/03.mp4'),
    poster: require('../assets/poster/03.jpg'),
    info: {
      userName: 'araaraaraara',
      description: 'DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription',
      music: 'araara',
      artist: 'araara',
      avatar: require('../assets/avatar/02.jpg'),
    },
    count: {
      like: '222K',
      comment: '1111',
      share: '223',
    }
  }
]

export default api;