import { View , Text, Image, StyleSheet, Dimensions, Animated, ScrollView, PanResponder, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
const { width , height } = Dimensions.get("screen");
import { Fragment, useCallback } from "react";
import { Fonts } from '../../fonts';
import Loader from "../../Loader";

const LastCard = ()=>{
    const [fontsLoaded] = Fonts();
    if (!fontsLoaded) {
        return null;
    }

    return (
        <Animated.View 
        style={[ styles.container]}>
            <View style={{flex: 1, borderRadius: 20, backgroundColor: 'white'}}>

                <View style={{width: width * 0.9, height: height * 0.78,  backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 20}}>
                    <Text style={{fontSize: 18, fontFamily: 'Poppins_700Bold'}}>
                        You finished all the profiles!
                    </Text>
                    <Text style={{fontSize: 80}}>😂</Text>
                    <Text style={{fontSize: 12, fontFamily: 'Poppins_500Medium', marginTop: 20}}>
                        Come back tomorrow for more!
                    </Text>
                    
                {/* <Image source={{uri: 'https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} style={styles.image} /> */}
               
                </View>

            
            </View>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        top: 70,
        borderRadius: 20,
        backgroundColor: 'white',
    },
    image: {
        width: width * 0.9,
        height: height * 0.78,
        borderRadius: 20,
        position: "absolute",
        top: 0,
        // left: 0,
        // right: 0,
        // bottom: 0
    },
    gradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 200,
        borderRadius:  20
    },
    userContainer:{
        position: "absolute",
        bottom: 24,
        left: 24
    },
    name: {
        fontSize: 30,
        color: "#FFFFFF",
        fontWeight: "400"
    },
    location: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: "300"
    },
    distance: {
        fontSize: 18,
        color: "#FFFFFF",
        fontWeight: "300"
    },
    choiceContainer: {
       position: 'absolute',
       top: 100
    },
    likeContainer:{
      left: 45,
      transform: [{ rotate: '-30deg' }]
    },
    nopeContainer:{
      right: 45,
      transform: [{ rotate: '30deg' }]
    },
})

export default LastCard