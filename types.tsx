export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
  AlbumScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type Album = {
  // id: '12',
  // name: '',
  // by: '',
  // numberOfLikes: 1,
  // imageUri: 'https://cdn6.f-cdn.com/contestentries/1485199/27006121/5ca3e39ced7f1_thumb900.jpg',
  // artistsHeadline: 'Post Malone, Drake, Eminem'
  id: string;
  name: string;
  by: string;
  numberOfLikes: number;
  imageUri: string;
  artistsHeadline: string;
}

export type Song = {
  id: string,
  imageUri: string,
  title: string,
  artist: string,
}