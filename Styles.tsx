import { StyleSheet } from 'react-native';

export const MainTabStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

export const SignUpTextStyles = StyleSheet.create({
  Text: {
    fontFamily: 'Futura',
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginTop: 40,  // Space from the top of the screen
    fontSize: 30,
    fontFamily: 'Futura',   // Larger font size for the header
    fontWeight: 'bold',  // Bold header text
    color: 'white',
    textAlign: 'center', // Center the header text
    paddingVertical: 10,  // Add some vertical padding around the header
    width: '100%',  // Make the header span the full width
    backgroundColor: '#6C30B2',  // Background color for the header section
  },
});
