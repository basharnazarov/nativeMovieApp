import React, { useEffect } from "react";
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
// @ts-ignore
import image from "../assets/cinema3.jpg";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    // backgroundColor: "#000000a0",
    // marginBottom: 10,


  },
  btnContainer: {
    borderRadius: 8,
    padding: 15,
    margin: 3,
    borderWidth: 1,
    borderColor: "red",
    cursor: "pointer",
    backgroundColor: "red",
    marginBottom: 150,
  },
});

// @ts-ignore
const LoginScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        {/*<Text style={styles.text}>Welcome to the Movie World</Text>*/}
        {/*<View style={styles.btnContainer}>*/}
        {/*<Button title={"Start browsing"} color="#fff"*/}
        {/*        onPress={() => navigation.navigate("Home")} />*/}
        <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.text}>Welcome to the Movie World</Text>
        </TouchableOpacity>
        {/*</View>*/}
      </ ImageBackground>
    </View>);
};

export default LoginScreen;

