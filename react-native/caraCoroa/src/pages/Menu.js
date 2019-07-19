import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import Container from "../components/containers";

class Menu extends Component {
  handleAction = () => {
    this.props.navigation.navigate("Game");
  };

  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  containerText: {
    marginTop: 45
  },

  buttonContainer: {
    alignItems: "center"
  },

  buttonSelected: {
    width: 380,
    backgroundColor: "#FBA100",
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
