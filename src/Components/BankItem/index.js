import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const BankItem = ({bankSender, bankRecipient}) => {
  return (
    <View style={styles.wrapperBank}>
      <Text style={styles.senderBank}>{bankSender}</Text>
      <Icon name="arrowright" size={18} />
      <Text style={styles.recipientBank}>{bankRecipient}</Text>
    </View>
  );
};

export default BankItem;

const styles = StyleSheet.create({
  wrapperBank: {flexDirection: 'row', alignItems: 'center', marginBottom: 2},
  senderBank: {
    fontWeight: '700',
    textTransform: 'uppercase',
    marginRight: 2,
  },
  recipientBank: {
    fontWeight: '700',
    textTransform: 'uppercase',
    marginLeft: 2,
  },
});
