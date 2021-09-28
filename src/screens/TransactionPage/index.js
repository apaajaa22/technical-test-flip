import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CardItem from '../../Components/CardItem';
import SearchBar from '../../Components/SearchBar';

const TransactionPage = ({navigation}) => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('URUTKAN');
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

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://nextar.flip.id/frontend-test')
      .then(response => response.json())
      .then(res => {
        const newRes = Object.values(res);
        setData(newRes);
      });
  }, []);

  const dataSearch =
    search === ''
      ? data
      : data.filter(user => {
          const lowerText = search.toLowerCase();
          return (
            `${user.beneficiary_name}`.toLowerCase().includes(lowerText) ||
            `${user.sender_bank}`.toLowerCase().includes(lowerText) ||
            `${user.beneficiary_bank}`.toLowerCase().includes(lowerText) ||
            `${user.amount}`.toLowerCase().includes(lowerText)
          );
        });

  return (
    <View style={styles.container}>
      <SearchBar value={sort} onChangeText={e => setSearch(e)} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {dataSearch.map(res => {
          const date = new Date(res.created_at);
          const day = date.getDate();
          const month = monthNames[date.getMonth()];
          const year = date.getFullYear();
          return (
            <CardItem
              key={res.id}
              name={res.beneficiary_name}
              bankSender={res.sender_bank}
              bankRecipient={res.beneficiary_bank}
              amount={res.amount}
              date={`${day} ${month} ${year}`}
              successColor={res.status === 'SUCCESS'}
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
