import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F5',
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    color: '#D4C2FF',
  },

  input: {
    height: 54,
    marginTop: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 8,
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inputBlock: {
    width: '48%',
  },

  searchButton: {
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#04D361',
  },

  searchButtonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;