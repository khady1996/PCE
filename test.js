import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Footer from "./components/Footer";

function Index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.footerFiller}></View>
      <Footer style={styles.footer}></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 50
  },
  footerFiller: {
    flex: 1
  },
  footer: {
    height: 50
  }
});

export default Index;
