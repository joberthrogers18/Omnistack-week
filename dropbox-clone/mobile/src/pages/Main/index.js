import React, { Component } from "react";

import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import api from "../../services/api";

import styles from "./styles";
import logo from "../../assets/logo.png";

export default class Main extends Component {
  state = {
    box: ""
  };

  async componentDidMount() {
    const box = await AsyncStorage.getItem("@RocketBox:box");

    if (box) {
      this.props.navigation.navigate("Box");
    }
  }

  handleSignIn = async () => {
    const response = await api.post("boxes", {
      title: this.state.box
    });

    await AsyncStorage.setItem("@RocketBox:box", response.data._id);

    //navegar o user para outra rota
    this.props.navigation.navigate("Box");
  };

  handleChange = nameBox => {
    this.setState({ ...this.state, box: nameBox });
  };

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <TextInput
          style={styles.input}
          onChangeText={this.handleChange}
          value={this.state.box}
          placeholder="Crie um box"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Criar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
