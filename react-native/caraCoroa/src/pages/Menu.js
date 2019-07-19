import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class Menu extends Component {
  handleAction = () => {
    this.props.navigation.navigate("Game");
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonSelected}
          onPress={this.handleAction}
        >
          <Text style={styles.textButton}>Começar</Text>
        </TouchableOpacity>
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

  buttonSelected: {
    backgroundColor: "#715",
    width: 200,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center"
  },

  textButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25
  }
});

export default Menu;
