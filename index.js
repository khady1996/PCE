import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/Feather";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect7}>
        <MaterialCommunityIconsIcon
          name="home"
          style={styles.icon6}
        ></MaterialCommunityIconsIcon>
        <FeatherIcon name="search" style={styles.icon7}></FeatherIcon>
        <MaterialCommunityIconsIcon
          name="bell-outline"
          style={styles.icon8}
        ></MaterialCommunityIconsIcon>
        <FeatherIcon name="mail" style={styles.icon9}></FeatherIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 375,
    height: 84,
    backgroundColor: "#1c2a38"
  },
  rect7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1
  },
  icon6: {
    color: "#1da6fa",
    fontSize: 40
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon8: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  icon9: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  }
});

export default Index;
