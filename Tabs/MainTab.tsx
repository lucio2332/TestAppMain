import React from 'react';
import { View, Text } from 'react-native';
import { MainTabStyles } from '../Styles'; // Import MainTabStyles

export default function MainTab() {
  return (
    <View style={MainTabStyles.container}>
      <Text>Main Tab</Text>
    </View>
  );
}
