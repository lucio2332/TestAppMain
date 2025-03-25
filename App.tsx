import React, { useState } from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { MainTabStyles, SignUpStyles } from './Styles'; // Import styles

import SignUp from './Tabs/SignUp';
import MainTab from './Tabs/MainTab';

export default function App() {
  // State to track which tab is selected (0 = Main, 1 = SignUp)
  const [selectedTab, setSelectedTab] = useState(1); // Default is SignUp

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Conditionally render the selected tab */}
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
    </SafeAreaView>
  );
}
