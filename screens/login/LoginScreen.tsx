import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { isSignedIn } from '../../utils/Store';
import { useRecoilState } from 'recoil';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

const LoginScreen = () => {
    const [SignedIn, setSignedIn] = useRecoilState(isSignedIn);

    return (

        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>LoginScreen</Text>
                <TouchableOpacity onPress={() => setSignedIn(true)}>
                    <Text style={{ color: 'blue' }} >Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen