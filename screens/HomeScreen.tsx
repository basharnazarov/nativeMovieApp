import React, { useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
  ImageBackground,
  StatusBar,
} from "react-native";
import { getMovieListAsync } from "../services/api";
import { IMovie } from "../services/types";
import Row from "../components/Row";
// @ts-ignore
import image from "../assets/cinema1.jpg";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  search: {
    borderColor: "#ddd",
    borderWidth: 1,
    padding: 5,
    width: "90%",
    alignItems: "center",
    margin: "auto",
    borderRadius: 8,
  },
});


// @ts-ignore
const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = React.useState<IMovie[]>([]);
  const [text, setText] = React.useState<string>("");
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    getMovieListAsync().then(res => setMovies(res));
  }, []);

  const handleChangeText = (text: string) => {
    setText(text);
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={image} style={styles.image}>
        <SafeAreaView>
          <TextInput placeholder={"search your movie..."} value={text} style={styles.search}
                     onChangeText={handleChangeText} />
          <FlatList data={movies} renderItem={Row}
                    keyExtractor={(item, index) => item?.id?.toString() ?? index.toString()} />
          <Button title="go to profile screen" onPress={() => navigation.navigate("Profile")} />
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;