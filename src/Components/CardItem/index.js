import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BankItem from '../BankItem';
import Icon from 'react-native-vector-icons/Octicons';

const CardItem = ({
  onPress,
  bankSender,
  bankRecipient,
  name,
  amount,
  date,
  statusTransfer,
  successColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <View style={styles.line(successColor)} />
      <View style={styles.wrapperContent}>
        <View style={styles.infoUser}>
          <BankItem bankSender={bankSender} bankRecipient={bankRecipient} />
          <Text style={styles.name}>{name}</Text>
          <Text>
            {/* mengubah format mata uang */}
            Rp{amount.toLocaleString('id-ID')}{' '}
            <Icon name="primitive-dot" size={12} /> {date}
          </Text>
        </View>
        <View style={styles.status(successColor)}>
          <Text style={styles.titleStatus(successColor)}>{statusTransfer}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: 'white',
    marginTop: 10,
  },
  line: successColor => ({
    //jika transaksi berhasil akan memberikan warna hijau
    //jika tidak orange
    backgroundColor: successColor ? '#50b885' : '#fd663a',
    height: '100%',
    width: 5,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 15,
  }),
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  infoUser: {
    paddingVertical: 10,
    flex: 1,
  },
  name: {
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  status: successColor => ({
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    //jika transaksi berhasil akan memberikan warna hijau
    //jika tidak orange
    borderColor: successColor ? '#50b885' : '#fd663a',
    //jika transaksi berhasil akan memberikan warna hijau
    //jika tidak putih
    backgroundColor: successColor ? '#50b885' : 'white',
  }),
  titleStatus: successColor => ({
    fontWeight: '600',
    //jika transaksi berhasil akan memberikan warna putih
    //jika tidak hitam
    color: successColor ? 'white' : '#000',
  }),
});
