import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class Container extends Component {
  handleAction = () => {
    this.props.navigation.navigate("Game");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerInt}>{this.props.children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5F0F4E",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    width: "100%"
  },

  containerInt: {
    flexDirection: "column",
    backgroundColor: "#67AECA",
    margin: 0,
    padding: 0,
    height: "93%",
    width: "90%"
  }
});

export default Container;
