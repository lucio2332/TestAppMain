import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SignUpStyles } from './Styles'; // Import SignUpStyles
import { MainTabStyles } from './Styles'; // Import MainTabStyles

import SignUp from './Tabs/SignUp';
import MainTab from './Tabs/MainTab';

export default function App() {
  // State to track which tab is selected (0 = Main, 1 = SignUp)
  const [selectedTab, setSelectedTab] = useState(1); // Default is SignUp

  return (
    <View style={{ flex: 1 }}>
      {selectedTab === 0 ? (
        <View style={MainTabStyles.container}>
          <MainTab />
        </View>
      ) : (
        <View style={SignUpStyles.container}>
          <SignUp />
        </View>
      )}
    </View>
  );
}
