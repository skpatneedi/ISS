import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, TouchableOpacity, Button, ImageBackground, Image } from 'react-native';
import { color } from 'react-native-reanimated';

export default class Homecreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.SafeAreaViewstyle}/>
                <ImageBackground source = {require('../assets/bg_image.png')} style = {styles.backgroundImage }>
                <View>
                    <Text style = {styles.text}> ISS TRACKER </Text>
                </View>
                <TouchableOpacity style  = {styles.button} onPress={() => this.props.navigation.navigate("ISS Location")}>
                    <Text style = {styles.buttonText}>
                        ISS Location
                    </Text>
                    <Text style = {styles.getmore}>
                    {"KNOW MORE..."}
                    </Text>
                    <Text style = {styles.digits}>
                    1
                    </Text>
                    <Image source = {require('../assets/iss_icon.png')} style = {styles.iconImage}></Image>
                </TouchableOpacity >
                <TouchableOpacity style  = {styles.button}onPress={() => this.props.navigation.navigate("Meteor")}>
                    <Text style = {styles.buttonText}>
                        Meteor
                    </Text>
                    <Text style = {styles.getmore}>
                    {"KNOW MORE..."}
                    </Text>
                    <Text style = {styles.digits}>
                    2
                    </Text>
                    <Image source = {require('../assets/meteor_icon.png')} style = {styles.iconImage}></Image>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    SafeAreaViewstyle:{
        marginTop:Platform.OS === "android"?StatusBar.currentHeight:0
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
      },
    text:{
        flex:0.15,
        fontSize:40,
        fontWeight:'bold',
        color:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    textView:{
        flex :0.15,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius:30,
        backgroundColor:'white',
        justifyContent:'center'

    },
    buttonText:{
        fontSize:35,
        fontWeight:'bold',
        color:'black',
        marginTop:75,
        paddingLeft:30
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover'
    },
    getmore:{
        paddingLeft:30,
        color:'red',
        fontSize:15
    },
    digits:{
        position:'absolute',
        color:"rgba(183,183,183,0.5)",
        fontSize:150,
        right:20,
        bottom:-15,
        zIndex:-1

       },
    iconImage:{
        position:'absolute',
        height:200,
        width:200,
        resizeMode:'contain',
        right:20,
        top:-80
       }


})
