import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BankItem from '../../Components/BankItem';
import Gap from '../../Components/Gap';
import TextItem from '../../Components/TextItem';
import Header from '../../Components/Header';

const DetailPage = ({route, navigation}) => {
  //pengambilan data lewat proses navigasi sebelumnya
  const {
    id,
    amount,
    sender_bank,
    beneficiary_bank,
    account_number,
    beneficiary_name,
    unique_code,
    created_at,
    remark,
  } = route.params;
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  //fungsi untuk copy text
  const onCopy = () => {
    Clipboard.setString(`${id}`);
    ToastAndroid.showWithGravityAndOffset(
      'ID Transaction copied',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };
  const rawDate = `${created_at}`.replace(' ', 'T');
  const date = new Date(rawDate);
  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return (
    <View style={styles.container}>
      <Header title="Detail Transaksi" />
      <View style={styles.contentWrapper}>
        <View style={styles.idWrapper}>
          <Text style={styles.idText}>ID TRANSAKSI: #{id}</Text>
          <TouchableOpacity activeOpacity={0.7} onPress={onCopy}>
            <Icon name="content-copy" color="#fd663a" size={16} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperSubText}>
          <Text style={styles.subText}>DETAIL TRANSAKSI</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.textClose}>Tutup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mainContent}>
          <BankItem bankRecipient={beneficiary_bank} bankSender={sender_bank} />
          <View style={styles.row}>
            <View>
              <TextItem title={beneficiary_name} subtitle={account_number} />
              <TextItem title="Berita transfer" subtitle={remark} />
              <TextItem
                title="Waktu dibuat"
                subtitle={`${day} ${month} ${year}`}
              />
            </View>
            <Gap width="15%" />
            <View>
              <TextItem
                title="Nominal"
                subtitle={`Rp${amount.toLocaleString('id-ID')}`}
              />
              <TextItem title="Kode unik" subtitle={unique_code} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9f8',
  },
  contentWrapper: {
    backgroundColor: 'white',
  },
  mainContent: {padding: 20},
  idWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f8f8',
    flexDirection: 'row',
    alignItems: 'center',
  },
  idText: {
    color: '#000',
    fontWeight: '700',
    marginRight: 5,
  },
  wrapperSubText: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9a9',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subText: {
    color: '#000',
    fontWeight: '700',
  },
  textClose: {
    color: '#fd663a',
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
  },
});
