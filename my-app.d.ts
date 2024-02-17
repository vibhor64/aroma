import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Login: undefined;
  Profile: undefined;
  Main: undefined;
  Like: undefined;
  Chat: undefined;
  Premium: undefined;
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'Home' | 'Chat'
>;