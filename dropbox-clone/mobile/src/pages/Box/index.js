import React, { Component } from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";
import api from "../../services/api";
import Icon from "react-native-vector-icons/MaterialIcons";

import { distanceInWords } from "date-fns";
import pt from "date-fns/locale/pt";

export default class Box extends Component {
  state = {
    box: {}
  };

  async componentDidMount() {
    const idBox = await AsyncStorage.getItem("@RocketBox:box");
    console.log(idBox);
    const response = await api.get(`boxes/${idBox}`);
    this.setState({ box: response.data });
  }

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => {}} style={styles.file}>
      <View style={styles.fileInfo}>
        <Icon name="insert-drive-file" size={24} color="#A5CFFF" />
        <Text style={styles.fileTitle}>{item.title}</Text>
      </View>
      <Text style={styles.fileDate}>
        há{" "}
        {distanceInWords(item.createdAt, new Date(), {
          locale: pt
        })}
      </Text>
    </TouchableOpacity>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.boxTitle}>{this.state.box.title}</Text>
        <FlatList
          data={this.state.box.files}
          style={styles.list}
          keyExtractor={file => file._id}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          renderItem={this.renderItem}
        />
        <TouchableOpacity style={styles.fab} onPress={this.handleUpload}>
          <Icon name="cloud-upload" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>
    );
  }
}
