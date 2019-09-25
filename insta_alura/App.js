import React from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList
} from "react-native";
import Post from "./src/components/Post";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default class App extends React.Component {
  render() {
    const photo = [
      { id: 1, user: "Lucas" },
      { id: 2, user: "Daniela" },
      { id: 3, user: "Paulo" },
      { id: 4, user: "Luara" }
    ];
    return (
      <FlatList
        style={styles.container}
        keyExtractor={item => String(item.id)}
        data={photo}
        renderItem={({ item }) => <Post foto={item} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  header: {
    margin: 10,
    flexDirection: "row",
    alignItems: "baseline"
  },
  perfil_foto: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  post: {
    marginRight: 10,
    width: width,
    height: width
  }
});
