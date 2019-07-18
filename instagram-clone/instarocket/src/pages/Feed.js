import React, { Component } from "react";

import { View, Image, TouchableOpacity } from "react-native";

import camera from "../assets/camera.png";

export default class Feed extends Component {
  // quando estiver nesse componente ele vai adicionar o icone para adicionar o icone de foto
  // para acessar a rota New la na navbar
  static navigationOptions = {
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => {}}>
        <Image source={camera} />
      </TouchableOpacity>
    )
  };

  render() {
    return <View />;
  }
}
