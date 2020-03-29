import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';
import LogoImg from '../assets/logo.png';
import styles from './styles';

export default function Incident() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);

  async function loadIncidents() {
    const response = await api.get('/incidents');

    setIncidents(response.data);
    console.log(response);
    setTotal(response.headers['x-total-count']);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  const navigation = useNavigation();

  function navigationToDetail() {
    navigation.navigate('Detail')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={LogoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos.</Text>
        </Text>
      </View>
      <Text style={styles.title}>Bem vindo</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia.
      </Text>
      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text
              style={styles.incidentValue}
            >
              {
                Intl.NumberFormat(
                  'pt-BR',
                  { style: 'currency', currency: 'BRL' }
                ).format(incident.value)
              }
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={navigationToDetail}
            >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather
                name="arrow-right"
                size={16}
                color="#E02041"
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}