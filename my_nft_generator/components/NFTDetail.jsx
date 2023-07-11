import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const NFTDetail = ({ nft }) => {
  return (
    <View style={styles.container}>
      <Image source={nft.image} style={styles.image} />
      <Text style={styles.title}>{nft.title}</Text>
      <Text style={styles.description}>{nft.description}</Text>
      {/* Additional details */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default NFTDetail;
