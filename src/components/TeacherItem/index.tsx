import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';

import styles from './styles';
import { useLinkProps } from '@react-navigation/native';

interface Props {
  favorited: boolean;
}

const TeacherItem = ({ favorited }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: 'https://github.com/rafaelsous.png' }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Rafael Sousa</Text>
          <Text style={styles.subject}>Matemática</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Alguém que ama desenvolvimento e é fascinado por aprender novas tecnologias aplicadas ao back-end, front-end e mobile.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 80,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.button, styles.favoriteButton, favorited && styles.favorited]}>
            {favorited
              ? <Image source={unfavoriteIcon} />
              : <Image source={heartOutlineIcon} />
            }
          </RectButton>

          <RectButton style={[styles.button, styles.contactButton]}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

TeacherItem.defaultProps = {
  favorited: false,
}

export default TeacherItem;