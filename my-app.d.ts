import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeStackNavigatorParamList = {
  Home: undefined;
  Login: undefined;
};

export type HomeScreenNavigationProp = NativeStackScreenProps<
  HomeStackNavigatorParamList,
  'Home' | 'Chat'
>;