import React from "react";
import { View, Text, FlatList } from "react-native";
import { search } from "../mockData";
// import image from "../assets/cinema3.jpg";

const RenderItem = ({ title }: { title: string }) => {
  return (<View>
    <Text>{title}</Text>
  </View>);
};

const ProfileScreen = () => (

  <View>

    <Text>Profile screen page</Text>
    <FlatList data={search.Search} renderItem={({ item }) => <RenderItem title={item.Title} />} />


    {/*<Button>go to homepage</Button>*/}
  </View>
);

export default ProfileScreen;