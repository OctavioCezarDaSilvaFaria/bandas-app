import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import MusicItem from "../components/MusicItem";

export default function Home({navigation}) {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const item={
    id: 1,
    title: "Highway to hell",
    group: "AC/DC",
    album_image:
    "data:image/jpeg;base64,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"
  };
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212"/>
      <Text style={styles.title}>Minhas Músicas</Text>
      <MusicItem 
      isPlaying={() => currentPlaying == item.id} 
      music={item} 
      navigation={navigation} 
      onPlayPause={() => {}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 16,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    marginLeft: 20,
  },
})