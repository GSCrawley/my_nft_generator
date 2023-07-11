import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

const NFTList = ({ data }) => {
  const renderNFTItem = ({ item }) => {
    // Render each NFT item
    return (
      <View style={styles.itemContainer}>
        {/* NFT item content */}
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderNFTItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  itemContainer: {
    // Styling for each NFT item
  },
});

export default NFTList;
