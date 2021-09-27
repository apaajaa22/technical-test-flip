import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import BankItem from '../../Components/BankItem';
import Gap from '../../Components/Gap';
import TextItem from '../../Components/TextItem';

const DetailPage = ({route, navigation}) => {
  const {
    id,
    amount,
    sender_bank,
    beneficiary_bank,
    account_number,
    beneficiary_name,
    unique_code,
    created_at,
  } = route.params;
  console.log(id);
  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.idWrapper}>
          <Text style={styles.idText}>ID TRANSAKSI:#{id}</Text>
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
              <TextItem title="Berita transfer" subtitle="Coba mbanking yey" />
              <TextItem title="Waktu dibuat" subtitle={created_at} />
            </View>
            <Gap width="20%" />
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
    paddingTop: 20,
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
  },
  idText: {
    color: '#000',
    fontWeight: '700',
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
