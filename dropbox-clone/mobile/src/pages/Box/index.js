import React, { Component } from "react";

import { View, Text, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";
import api from "../../services/api";
import Icon from "react-native-vector-icons/MaterialIcons";
import ImagePicker from "react-native-image-picker";
import RNRS from "react-native-fs";
import FileViewer from "react-native-file-viewer";
import socket from "socket.io-client";

import { distanceInWords } from "date-fns";
import pt from "date-fns/locale/pt";

export default class Box extends Component {
  state = {
    box: {}
  };

  async componentDidMount() {
    const idBox = await AsyncStorage.getItem("@RocketBox:box");
    this.subscribeToNewFiles(idBox);

    const response = await api.get(`boxes/${idBox}`);
    this.setState({ box: response.data });
  }

  openFile = async file => {
    try {
      const filePath = `${RNRS.DocumentDirectoryPath}/${file.title}`;

      console.log(filePath);

      await RNRS.downloadFile({
        fromUrl: file.url,
        toFile: filePath
      });

      await FileViewer.open(filePath);
    } catch (error) {
      console.log("Arquivo não suportado");
    }
  };

  subscribeToNewFiles = boxId => {
    const io = socket("https://dropbox-clone-oministack.herokuapp.com/");

    // Quando emiti a mensage; 'connectRoom' room ele vai colocar o novo
    // host dentro do id da box
    io.emit("connectRoom", boxId);

    io.on("file", data => {
      this.setState({
        box: { ...this.state.box, files: [data, ...this.state.box.files] }
      });
    });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.openFile(item)} style={styles.file}>
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

  handleUpload = () => {
    ImagePicker.launchImageLibrary({}, async upload => {
      if (upload.error) {
        console.log("Image picker error");
      } else if (upload.didCancel) {
        console.log("Canceled by user");
      } else {
        const data = new FormData();

        const [prefix, suffix] = upload.fileName.split(".");
        const ext = suffix.toLowerCase() === "heic" ? "jpg" : suffix;

        data.append("file", {
          uri: upload.uri,
          type: upload.type,
          name: `${prefix}.${ext}`
        });

        api.post(`boxes/${this.state.box._id}/files`, data);
      }
    });
  };

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
