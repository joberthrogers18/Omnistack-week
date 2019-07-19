import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.mainText}>Cara e coroa</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 80
  }
});

export default App;
