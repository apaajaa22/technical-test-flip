import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const RadioButton = ({label, isActive, onPressRdoBtn}) => {
  return (
    <TouchableOpacity onPress={onPressRdoBtn} style={styles.btnRadioWrapper}>
      <View style={styles.borderRdoBtn}>
        <View style={styles.dotRdoBtn(isActive)} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  btnRadioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 20,
    padding: 5,
  },
  borderRdoBtn: {
    borderWidth: 2,
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fd663a',
    marginRight: 4,
  },
  dotRdoBtn: isActive => ({
    backgroundColor: isActive ? '#fd663a' : 'white',
    width: 12,
    height: 12,
    borderRadius: 6,
  }),
  label: {
    fontWeight: '500',
  },
});
