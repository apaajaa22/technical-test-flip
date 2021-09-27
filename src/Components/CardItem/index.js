import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const CardItem = ({
  onPress,
  bankSender,
  bankRecipient,
  name,
  amount,
  date,
  statusTransfer,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.container}>
      <View style={styles.line} />
      <View style={styles.wrapperContent}>
        <View style={styles.infoUser}>
          <View style={styles.wrapperBank}>
            <Text style={styles.senderBank}>{bankSender}</Text>
            <Icon name="arrowright" size={18} />
            <Text style={styles.recipientBank}>{bankRecipient}</Text>
          </View>
          <Text style={styles.name}>{name}</Text>
          <Text>
            Rp{amount} * {date}
          </Text>
        </View>
        <View style={styles.status}>
          <Text style={styles.titleStatus}>{statusTransfer}</Text>
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
  line: {
    backgroundColor: '#fd663a',
    height: '100%',
    width: 5,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    marginRight: 15,
  },
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
  status: {
    marginRight: 10,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderColor: '#fd663a',
  },
  titleStatus: {
    fontWeight: '600',
  },
});
