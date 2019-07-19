import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

import cara from "../assets/cara.png";
import coroa from "../assets/coroa.png";

import Container from "../components/containers";
import ImageCoin from "../components/imageCoin";

class Game extends Component {
  state = {
    coin: 0,
    disabled: false
  };

  componentDidMount() {
    this.handleButton();
  }

  sleep = ms => {
    this.setState({ coin: 2, disabled: true });
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  handleButton = async () => {
    await this.sleep(1000);

    function shuffle(array) {
      array.sort(() => Math.random() - 0.5);

      return array[0];
    }

    let coin = shuffle([0, 1]);

    this.setState({ coin, disabled: false });
  };

  handleState = () => {
    switch (this.state.coin) {
      case 0:
        return <ImageCoin image={cara} choice="cara" />;
      case 1:
        return <ImageCoin image={coroa} choice="coroa" />;
      case 2:
        return (
          <ActivityIndicator
            size={250}
            style={styles.loading}
            color="#E52A6F"
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <Container>
        <View style={styles.container}>
          {this.handleState()}
          <View style={styles.containerButton}>
            <TouchableOpacity
              style={
                this.state.disabled ? styles.buttonDisable : styles.buttonEnable
              }
              onPress={this.handleButton}
              disabled={this.state.disabled}
            >
              <Text style={styles.textButton}>Jogar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },

  coin: {
    marginTop: 120
  },

  containerButton: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 100
  },

  textButton: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20
  },

  imageCoin: {
    width: 250,
    height: 250
  },

  loading: {
    marginTop: 120
  },

  buttonDisable: {
    opacity: 0.5,
    width: 200,
    backgroundColor: "#E52A6F",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center"
  },

  buttonEnable: {
    opacity: 1,
    width: 200,
    backgroundColor: "#E52A6F",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    justifyContent: "center"
  }
});

export default Game;
