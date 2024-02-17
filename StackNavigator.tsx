import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { HomeStackNavigatorParamList } from './my-app';
import LoginScreen from './screens//login/LoginScreen';
import { isSignedIn } from './utils/Store';
import { useRecoilState } from 'recoil';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export default function StackNavigator() {
  const [SignedIn, setSignedIn] = useRecoilState(isSignedIn);

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {SignedIn ? (
          <>
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeScreen} />
          </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
  )
}