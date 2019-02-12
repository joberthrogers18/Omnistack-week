import React, { Component } from 'react';
import api from '../services/api';

import {StyleSheet, TouchableOpacity, Text, FlatList} from 'react-native';

import { View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Tweet from '../components/Tweet';

// import styles from './styles';

export default class Timeline extends Component {
    static navigationOptions = {
    title: 'Timeline',
        headerRight: (
            <TouchableOpacity onPress={() => {}}>
                <Icon style={{marginRight: 20}}
                    name="add-circle-outline" // icon in material Icons
                    size={24}
                    color="#4BB0EE"
                />
            </TouchableOpacity>
        )
    };

    state = {
        tweets: []
    }

    async componentDidMount(){
        const response = await api.get('tweets');

        this.setState({tweets: response.data});
    }

  render() {
    return( 
        <View style={styles.container} >
            <FlatList 
                data={this.state.tweets} //data from list that i want show
                keyExtractor={(tweet => tweet._id)} // id in map example, because all the list need an id unique
                renderItem={({ item }) => <Tweet tweet={item}/>}
            />
        </View>
        );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
});
