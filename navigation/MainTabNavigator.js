import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import SprintScreen from '../screens/SprintScreen';
import GoalsScreen from '../screens/GoalsScreen';
import BacklogScreen from '../screens/BacklogScreen';
import HistoryScreen from '../screens/HistoryScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const SprintStack = createStackNavigator(
  {
    Sprint: SprintScreen,
  },
  config
);

SprintStack.navigationOptions = {
  tabBarLabel: 'Sprint',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

SprintStack.path = '';


const GoalsStack = createStackNavigator(
  {
    Goals: GoalsScreen,
  },
  config
);

GoalsStack.navigationOptions = {
  tabBarLabel: 'Goals',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

GoalsStack.path = '';

const BacklogStack = createStackNavigator(
  {
    Backlog: BacklogScreen,
  },
  config
);

BacklogStack.navigationOptions = {
  tabBarLabel: 'Backlog',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

BacklogStack.path = '';

const HistoryStack = createStackNavigator(
  {
    History: HistoryScreen,
  },
  config
);

HistoryStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

HistoryStack.path = '';

const tabNavigator = createBottomTabNavigator({
  SprintStack,
  GoalsStack,
  BacklogStack,
  HistoryStack,
});

tabNavigator.path = '';

export default tabNavigator;
