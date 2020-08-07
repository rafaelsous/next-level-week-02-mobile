import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E6E6F0',
    borderRadius: 8,
    backgroundColor: '#FFF',
    overflow: 'hidden',
  },
  
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EEE',
  },

  profileInfo: {
    marginLeft: 16,
  },

  name: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#32264D',
  },

  subject: {
    marginTop: 4,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#6A6180',
  },
  
  bio: {
    marginHorizontal: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    textAlign: 'justify',
    lineHeight: 24,
    color: '#6A6180',
  },

  footer: {
    marginTop: 24,
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#FAFAFC',
    borderTopWidth: 1,
    borderTopColor: '#E6E6F0'
  },

  price: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 14,
    color: '#6A6180',
  },

  priceValue: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#8257E5',
  },
  
  buttonsContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    borderRadius: 8,
  },
  
  favoriteButton: {
    width: 56,
    backgroundColor: '#8257E5',
  },

  favorited: {
    backgroundColor: '#E33D3D',
  },

  contactButton: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 9,
    backgroundColor: '#04D361',
  },

  contactButtonText: {
    marginLeft: 16,
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;