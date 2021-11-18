import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView, 
    TouchableOpacity, 
    Platform, 
    StatusBar, 
    ImageBackground, 
    Image 
} from "react-native";

export default class HomeScreen extends Component {
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}>
                    <ImageBackground source={require('../assets/stars.gif')}  style = {styles.backgroundImage}>
                        <View style={styles.titleBar}>
                            <Image source={require("../assets/main-icon.png")} style={{width:150, height:150}}/>
                            <Text style={styles.titleText} >Stellar</Text>
                            <Text style={styles.titleText} >App</Text>
                        </View>
                        <TouchableOpacity>
                            <Text>SpaceCrafts</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>StarMap</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>DailyPics</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </SafeAreaView>
            </View>
        )
    }
}
const styles = StylesSheet.create({

})