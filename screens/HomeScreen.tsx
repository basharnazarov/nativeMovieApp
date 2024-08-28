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
import { getMovieListAsync, getMovieListAsyncBySearch } from "../services/api";
import { IMovie } from "../services/types";
import Row from "../components/Row";
// @ts-ignore
import image from "../assets/cinema1.jpg";
import Loading from "../components/Loading";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 40,
    rowGap: 15,

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
    width: "100%",
    alignItems: "center",
    margin: "auto",
    borderRadius: 8,
    color: "#fff",

  },
});


// @ts-ignore
const HomeScreen = ({ navigation }) => {
  const [movies, setMovies] = React.useState<IMovie[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState<string>("");

  const handleChangeText = (text: string) => {
    setText(text);
  };

  useEffect(() => {
    setLoading(true);
    navigation.setOptions({ headerShown: false });
    getMovieListAsync().then(res => {
      setMovies(res);
      setLoading(false);
    });
  }, []);


  useEffect(() => {
    if (text.length > 0) {
      setLoading(true);
      navigation.setOptions({ headerShown: false });
      getMovieListAsyncBySearch(text).then(res => {
        setMovies(res);
        setLoading(false);
      });
    }

  }, [text]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={image} style={styles.image}>
        <SafeAreaView style={styles.container}>
          <TextInput placeholder={"search your movie..."} placeholderTextColor="#fff" value={text} style={styles.search}
                     onChangeText={handleChangeText} />
          {loading ? <Loading /> : <FlatList data={movies} renderItem={Row}
                                             keyExtractor={(item, index) => item?.id?.toString() ?? index.toString()} />}
          {/*<Button title="go to profile screen" onPress={() => navigation.navigate("Profile")} />*/}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;