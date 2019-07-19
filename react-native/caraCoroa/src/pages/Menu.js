import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

class Menu extends Component {
  handleAction = () => {
    this.props.navigation.navigate("Game");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerInt}>
          <View style={styles.containerText}>
            <Text style={styles.logo}>Cara</Text>
            <Text style={styles.logo}>ou</Text>
            <Text style={styles.logo}>Coroa</Text>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonSelected}
              onPress={this.handleAction}
            >
              <Text style={styles.textButton}>Começar</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  },

  containerText: {
    marginTop: 45
  },

  buttonContainer: {
    alignItems: "center"
  },

  buttonSelected: {
    width: 380,
    backgroundColor: "#E52A6F",
    height: 70,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center",
    marginTop: 120
  },

  textButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 40,
    textShadowColor: "#000",
    textShadowRadius: 10,
    textShadowOffset: { width: -1, height: 2 }
  },

  logo: {
    fontWeight: "bold",
    fontSize: 120,
    textAlign: "center",
    color: "#fff",
    textShadowColor: "#000",
    textShadowRadius: 10,
    textShadowOffset: { width: -2, height: 3 }
  }
});

export default Menu;
