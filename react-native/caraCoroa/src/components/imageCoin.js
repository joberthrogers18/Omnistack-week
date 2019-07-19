import React, { Component } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

class ImageCoin extends Component {
  render() {
    return (
      <View style={styles.coin}>
        <Image style={styles.imageCoin} source={this.props.image} />
        <Text style={styles.choice}>Você tirou {this.props.choice}!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  coin: {
    marginTop: 120
  },

  imageCoin: {
    width: 250,
    height: 250
  },

  choice: {
    color: "#fff",
    fontSize: 33,
    fontWeight: "bold",
    marginTop: 35,
    textAlign: "center"
  }
});

export default ImageCoin;
