import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257E5',
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },

  title: {
    marginTop: 80,
    color: '#FFF',
    fontSize: 20,
    lineHeight: 30,
    fontFamily: 'Poppins_400Regular',
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  button: {
    width: '48%',
    height: 150,
    justifyContent: 'space-between',
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#333',
  },
  
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 20,
  },
  
  buttonPrimary: {
    backgroundColor: '#9871F5',
  },
  
  buttonSecondary: {
    backgroundColor: '#04D361',
  },

  totalConnections: {
    maxWidth: 150,
    marginTop: 40,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,
    color: '#D4C2FF',
  },
});

export default styles;