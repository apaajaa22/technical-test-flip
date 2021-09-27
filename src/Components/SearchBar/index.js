import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

const SearchBar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value, setValue] = useState('URUTKAN');

  const pickSort = e => {
    setValue(e);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="search1" size={24} color="#a9a9a9" />
      </TouchableOpacity>
      <View style={styles.input}>
        <TextInput placeholder="Cari nama, bank, atau nominal" />
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.sortWrapper}>
        <Text style={styles.text}>{value}</Text>
        <Icon name="down" color="#fd663a" size={20} />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <View style={styles.containerModal}>
          <View style={styles.modalContent}>
            <RadioButton.Group onValueChange={e => pickSort(e)} value={value}>
              <View style={styles.btnRadioWrapper}>
                <RadioButton
                  color="#fd663a"
                  uncheckedColor="#fd663a"
                  value="URUTKAN"
                />
                <Text>URUTKAN</Text>
              </View>
              <View style={styles.btnRadioWrapper}>
                <RadioButton
                  color="#fd663a"
                  uncheckedColor="#fd663a"
                  value="Nama A-Z"
                />
                <Text>Nama A-Z</Text>
              </View>
              <View style={styles.btnRadioWrapper}>
                <RadioButton
                  color="#fd663a"
                  uncheckedColor="#fd663a"
                  value="Nama Z-A"
                />
                <Text>Nama Z-A</Text>
              </View>
              <View style={styles.btnRadioWrapper}>
                <RadioButton
                  color="#fd663a"
                  uncheckedColor="#fd663a"
                  value="Tanggal Terbaru"
                />
                <Text>Tanggal Terbaru</Text>
              </View>
              <View style={styles.btnRadioWrapper}>
                <RadioButton
                  color="#fd663a"
                  uncheckedColor="#fd663a"
                  value="Tanggal Terlama"
                />
                <Text>Tanggal Terlama</Text>
              </View>
            </RadioButton.Group>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRadius: 8,
  },
  input: {
    flex: 1,
  },
  containerModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: '50%',
  },
  sortWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '100%',
    borderRadius: 8,
  },
  btnRadioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#fd663a',
    fontWeight: '700',
    marginRight: 2,
  },
});
