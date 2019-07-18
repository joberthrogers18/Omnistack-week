import React, { Component } from "react";
import ImagePicker from "react-native-image-picker";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput
} from "react-native";

export default class pages extends Component {
  static navigationOptions = {
    headerTitle: "Nova publicação",
    headerTitleStyle: { flex: 1, textAlign: "center", fontWeight: "bold" }
  };

  state = {
    author: "",
    place: "",
    description: "",
    hashtags: ""
  };

  handleSelectImage = () => {
    ImagePicker.showImagePicker(
      {
        title: "Seletionar image"
      },
      upload => {}
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.selectButton}
          onPress={this.handleSelectImage}
        >
          <Text style={styles.selectButtonText}>Selecionar Imagem</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome do autor"
          placeholderTextColor="#999"
          value={this.state.author}
          onChangeText={author => this.setState({ author })}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Local da foto"
          placeholderTextColor="#999"
          value={this.state.place}
          onChangeText={place => this.setState({ place })}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Nome do autor"
          placeholderTextColor="#999"
          value={this.state.author}
          onChangeText={author => this.setState({ author })}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Descrição"
          placeholderTextColor="#999"
          value={this.state.description}
          onChangeText={description => this.setState({ description })}
        />

        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Hashtags"
          placeholderTextColor="#999"
          value={this.state.hashtags}
          onChangeText={hashtags => this.setState({ hashtags })}
        />

        <TouchableOpacity style={styles.shareButton} onPress={() => {}}>
          <Text style={styles.shareButtonText}>Compartilhar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30
  },

  selectButton: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#CCC",
    borderStyle: "dashed",
    height: 42,

    justifyContent: "center",
    alignItems: "center"
  },

  selectButtonText: {
    fontSize: 16,
    color: "#666"
  },

  preview: {
    width: 100,
    height: 100,
    marginTop: 10,
    alignSelf: "center",
    borderRadius: 4
  },

  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 15,
    marginTop: 10,
    fontSize: 16
  },

  shareButton: {
    backgroundColor: "#7159c1",
    borderRadius: 4,
    height: 42,
    marginTop: 15,

    justifyContent: "center",
    alignItems: "center"
  },

  shareButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF"
  }
});
