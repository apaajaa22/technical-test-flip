import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = ({
  onChangeText,
  valueSearch,
  onPress,
  value,
  onPressSort,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="search1" size={24} color="#a9a9a9" />
      </TouchableOpacity>
      <View style={styles.input}>
        <TextInput
          onChangeText={onChangeText}
          placeholder="Cari nama, bank, atau nominal"
          value={valueSearch}
        />
      </View>
      <TouchableOpacity onPress={onPressSort} style={styles.sortWrapper}>
        <Text style={styles.text}>{value}</Text>
        <Icon name="down" color="#fd663a" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  input: {
    flex: 1,
  },
  sortWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fd663a',
    fontWeight: '700',
    marginRight: 2,
  },
});
