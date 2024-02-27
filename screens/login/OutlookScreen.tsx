import { View, Text, Platform } from 'react-native'
import React from 'react'

const OutlookScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20, paddingTop: Platform.OS === 'android' ? 30 : 60, backgroundColor: '#000' }}>
      <Text style={{ fontSize: 32, fontFamily: 'Poppins_700Bold', color: '#E23DA0' }}>Outlook Verification</Text>
      <Text style={{ fontSize: 11, fontFamily: 'Poppins_600SemiBold', color: '#fff' }}>Verify you are from Manipal University Jaipur. This will help us improve the authenticity of the platform.</Text>
    </View>
  )
}

export default OutlookScreen