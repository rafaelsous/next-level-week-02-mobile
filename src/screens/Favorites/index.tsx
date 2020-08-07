import React from 'react';
import { View, ScrollView } from 'react-native';

import ScreenHeader from '../../components/ScreenHeader';
import TeacherItem from '../../components/TeacherItem';

import styles from './styles';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Meus proffys favoritos" />

      <ScrollView
        style={styles.favoriteList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 24,
        }}
      >
        <TeacherItem favorited />
        <TeacherItem favorited />
        <TeacherItem favorited />
        <TeacherItem favorited />
        <TeacherItem favorited />
      </ScrollView>
    </View >
  );
}

export default Favorites;