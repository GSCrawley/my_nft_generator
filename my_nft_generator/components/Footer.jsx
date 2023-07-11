import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      {/* Footer content */}
      <Text>© 2023 NFT App. All rights reserved.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
});

export default Footer;
