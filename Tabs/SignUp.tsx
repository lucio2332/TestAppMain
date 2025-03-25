// SignUp.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { SignUpStyles } from '../Styles'; // Import SignUpStyles
import { SignUpTextStyles } from '../Styles';

export default function SignUp() {
  return (
    <View style={SignUpStyles.container}>
      <Text style={SignUpStyles.header}>Accountability</Text>
      <Text style={[SignUpTextStyles.Text, {position: 'absolute', top: 150, flex: 1, justifyContent: 'center', alignItems: 'center', right: 115}]}>Please Login In</Text>
    </View>
  );
}
