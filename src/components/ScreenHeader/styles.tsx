import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#8257E5',
  },

  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    maxWidth: 160,
    marginVertical: 40,
    fontFamily: 'Archivo_700Bold',
    fontSize: 24,
    lineHeight: 32,
    color: '#FFF',
  },

  subtitle: {},
});

export default styles;