import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import RadioButton from '../RadioButton';

const ModalCustom = ({visible, onRequestClose, onPressRdoBtn, labelSort}) => {
  const data = [
    {label: 'URUTKAN'},
    {label: 'Nama A-Z'},
    {label: 'Nama Z-A'},
    {label: 'URUTKAN'},
  ];
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}>
      <View style={styles.containerModal}>
        <View style={styles.modalContent}>
          {data.map(res => {
            return (
              <RadioButton
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
