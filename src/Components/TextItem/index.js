import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TextItem = ({title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

export default TextItem;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title: {
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontWeight: '400',
  },
});
