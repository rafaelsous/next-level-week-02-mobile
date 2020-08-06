import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import ScreenHeader from '../../components/ScreenHeader';

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScreenHeader title="Meus proffys favoritos" />
    </View>
  );
}

export default Favorites;