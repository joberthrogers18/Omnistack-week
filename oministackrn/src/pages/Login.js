import React, { Component } from 'react';

import { KeyboardAvoidingView, View, TextInput, StyleSheet, TouchableOpacity, Text, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'; //using font awesome for get icons from twitter

// import styles from './styles';

//The keyboardview it is like a view, but all content is going to up the keyboard when it is action
// TouchableOpacity is just a button with event with a smoth opacity when it's click
export default class Login extends Component {

    state = {
        username: ""
    };

    async componentDidMount() {
        const username = await AsyncStorage.getItem('@Oministack:username');

        if(username){
            this.props.navigation.navigate('Timeline'); //if user already input his name and it already sabe in database, go to timeline
        }
    }

    handleInput = (username) => {
        this.setState({username});
    };

    handleLogin = async() => {
        const {username} = this.state;

        if(!username.length) return;

        await AsyncStorage.setItem('@Oministack:username', username); // save in sqlite in our aplication, db local

        this.props.navigation.navigate('Timeline'); // Redirect to route
    };

  render() {
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}> 
            <View style={styles.content}>
                <View>
                    <Icon name="twitter" size={64} color="#4BB0EE" />
                </View>
                <TextInput  
                    style={styles.input}
                    placeholder="Nome de usuário"
                    value={this.username}
                    onChangeText={this.handleInput} // verify when there are updates in text
                    onSubmitEditing={this.handleLogin}
                    returnKeyType="send"
                />
                <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
  
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 30
    },
  
    input: {
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      height: 44,
      paddingHorizontal: 15,
      alignSelf: "stretch",
      marginTop: 30
    },
  
    button: {
      height: 44,
      alignSelf: "stretch",
      marginTop: 10,
      backgroundColor: "#4BB0EE",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    }
  });