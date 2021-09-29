import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import RadioButton from '../RadioButton';

const ModalCustom = ({visible, onRequestClose, onPressRdoBtn, labelSort}) => {
  const data = [
    {id: 1, label: 'URUTKAN'},
    {id: 2, label: 'Nama A-Z'},
    {id: 3, label: 'Nama Z-A'},
    {id: 4, label: 'Tanggal Terbaru'},
    {id: 5, label: 'Tanggal Terlama'},
  ];
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.containerModal}>
        <View style={styles.modalContent}>
          {/* map komponen radio button berdasarkan data
        di atas untuk label radio button */}
          {data.map(res => {
            return (
              <RadioButton
                key={res.id}
                isActive={res.label === labelSort}
                onPressRdoBtn={() => onPressRdoBtn(res)}
                label={res.label}
              />
            );
          })}
        </View>
      </View>
    </Modal>
  );
};

export default ModalCustom;

const styles = StyleSheet.create({
  containerModal: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    width: '100%',
    borderRadius: 8,
  },
});
