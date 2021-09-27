import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import CardItem from '../../Components/CardItem';
import SearchBar from '../../Components/SearchBar';

const TransactionPage = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://nextar.flip.id/frontend-test')
      .then(response => response.json())
      .then(res => {
        const newRes = Object.values(res);
        setData(newRes);
      });
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map(res => {
          return (
            <CardItem
              key={res.id}
              name={res.beneficiary_name}
              bankSender={res.sender_bank}
              bankRecipient={res.beneficiary_bank}
              amount={res.amount}
              date={res.created_at}
              statusTransfer={
                res.status === 'SUCCESS' ? 'Berhasil' : 'Pengecekan'
              }
              onPress={() => navigation.navigate('transaction-detail', res)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default TransactionPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9f8',
    padding: 5,
  },
});
