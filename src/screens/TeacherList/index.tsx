import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import ScreenHeader from '../../components/ScreenHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

const TeacherList: React.FC = () => {
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);
  const [favorites, setFavorites] = useState<Array<number>>([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        });

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  function resetFilters() {
    setSubject('');
    setWeekDay('');
    setTime('');
  }

  async function handleSubmit() {
    loadFavorites();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });

    setIsFiltersVisible(false);
    setFilteredTeachers(response.data);
    // resetFilters();
  }

  return (
    <View style={styles.container}>
      <ScreenHeader
        title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton>
            <Icon
              style={{ padding: 4 }}
              onPress={handleToggleFiltersVisible}
              name="filter"
              color="#04D361"
              size={24}
            />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#C1BCCC"
              value={subject}
              onChangeText={setSubject}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#C1BCCC"
                  value={weekDay}
                  onChangeText={setWeekDay}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Que horas?"
                  placeholderTextColor="#C1BCCC"
                  value={time}
                  onChangeText={setTime}
                />
              </View>
            </View>

            <RectButton
              onPress={handleSubmit}
              style={styles.searchButton}
            >
              <Text style={styles.searchButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </ScreenHeader>

      <ScrollView
        style={styles.teacherList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        { filteredTeachers.map(teacher => (
            <TeacherItem
              key={teacher.id} {...{ teacher }}
              favorited={favorites.includes(teacher.id)}
            />
          )
        )} 
      </ScrollView>
    </View>
  );
}

export default TeacherList;