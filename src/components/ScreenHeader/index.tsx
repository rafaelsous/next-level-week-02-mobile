import React from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import logoImg from '../../assets/images/logo.png';

import backIcon from '../../assets/images/icons/back.png';

import styles from './styles';

interface Props {
  title: string;
  children?: React.ReactNode;
}

const ScreenHeader = ({ title, children }: Props) => {
  const { navigate } = useNavigation()

  function handleNavigateBack() {
    navigate('Landing');
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleNavigateBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain" />
      </View>

      <Text style={styles.title}>{title}</Text>

      { children }
    </View>
  );
}

export default ScreenHeader;