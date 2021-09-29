import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import CardItem from '../../Components/CardItem';
import Loading from '../../Components/Loading';
import ModalCustom from '../../Components/ModalCustom';
import SearchBar from '../../Components/SearchBar';

const TransactionPage = ({navigation}) => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState('URUTKAN');
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

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

  const getData = () => {
    setLoading(true);
    fetch('https://nextar.flip.id/frontend-test')
      .then(response => response.json())
      .then(res => {
        const newRes = Object.values(res);
        setData(newRes);
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
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

  const doSort = e => {
    setSort(e.label);
    setVisible(false);
    switch (e.label) {
      case 'URUTKAN':
        return data;
      case 'Nama A-Z':
        return data.sort((a, b) =>
          a.beneficiary_name > b.beneficiary_name ? 1 : -1,
        );
      case 'Nama Z-A':
        return data.sort((a, b) =>
          a.beneficiary_name > b.beneficiary_name ? -1 : 1,
        );
      case 'Tanggal Terbaru':
        return data.sort((a, b) => (a.created_at > b.created_at ? -1 : 1));
      case 'Tanggal Terlama':
        return data.sort((a, b) => (a.created_at > b.created_at ? 1 : -1));
      default:
        return data;
    }
  };

  return (
    <>
      <View style={styles.container}>
        <SearchBar
          value={sort}
          onChangeText={e => setSearch(e)}
          onPressSort={() => setVisible(true)}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          {dataSearch.map(res => {
            const rawDate = `${res.created_at}`.replace(' ', 'T');
            const date = new Date(rawDate);
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
        <ModalCustom
          onRequestClose={() => setVisible(false)}
          labelSort={sort}
          visible={visible}
          onPressRdoBtn={doSort}
        />
      </View>
      {loading && <Loading />}
    </>
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
