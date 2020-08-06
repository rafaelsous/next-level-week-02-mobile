import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257E5',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    maxWidth: 180,
    fontFamily: 'Archivo_700Bold',
    fontSize: 32,
    lineHeight: 37,
    color: '#FFF',
  },

  description: {
    maxWidth: 240,
    marginTop: 24,
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    lineHeight: 26,
    color: '#D4C2FF',
  },

  okButton: {
    height: 58,
    marginVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#04D361',
  },

  okButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;