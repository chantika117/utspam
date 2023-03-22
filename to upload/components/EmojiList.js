import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, TouchableOpacity } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require('../assets/icon1.png'),
    require('../assets/icon2.png'),
    require('../assets/icon3.png'),
    require('../assets/icon4.png'),
    require('../assets/icon5.png'),
    require('../assets/icon6.png'),
    require('../assets/icon7.png'),
    require('../assets/icon8.png'),
    require('../assets/icon9.png'),
    require('../assets/icon10.png'),
    require('../assets/icon11.png'),
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}>
            <Image source={item} key={index} style={styles.image} />
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
