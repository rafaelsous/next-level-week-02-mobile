import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons as Icon } from '@expo/vector-icons';

import TeacherList from '../screens/TeacherList';
import Favorites from '../screens/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

const StudyTabs = () => (
  <Navigator
    tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 64,
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      iconStyle: {
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
        marginLeft: 16,
      },
      inactiveBackgroundColor: '#FAFAFC',
      activeBackgroundColor: '#EBEBF5',
      inactiveTintColor: '#C1BCCC',
      activeTintColor: '#32264D',     
    }}
  >
    <Screen
      name="TeacherList"
      component={TeacherList}
      options={{
        tabBarLabel: "Proffys",
        tabBarIcon: ({ color, size, focused }) => (
          <Icon
            name="ios-easel"
            {...{ size }}
            color={focused ? "#8257E5" : color}
          />
        ),
      }}
    />
    
    <Screen
      name="Favorites"
      component={Favorites}
      options={{
        tabBarLabel: "Favoritos",
        tabBarIcon: ({ color, size, focused }) => (
          <Icon
            name="ios-heart"
            {...{ size }}
            color={focused ? "#8257E5" : color}
          />
        ),
      }}
    />
  </Navigator>
);

export default StudyTabs;