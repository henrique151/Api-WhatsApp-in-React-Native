import React, { useState } from 'react';
import { View, TextInput, Button, Linking, Alert, StyleSheet } from 'react-native';

const WhatsAppScreen = () => {
  const [message, setMessage] = useState('');

  const sendWhatsAppMessage = async () => {
    const phoneNumber = '5511912494624'; // Substitua pelo número de telefone do destinatário
    const text = encodeURIComponent(message);

    // Construa a URL do WhatsApp
    const url = `whatsapp://send?phone=${phoneNumber}&text=${text}`;

    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
        console.log('WhatsApp aberto com sucesso no Android');
      } else {
        Alert.alert('Erro', 'O WhatsApp não está instalado no dispositivo');
      }
    } catch (error) {
      console.error('Erro ao abrir o WhatsApp no Android:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar abrir o WhatsApp');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Digite sua mensagem"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Enviar mensagem no WhatsApp" onPress={sendWhatsAppMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 16, 
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    width: '100%', 
    paddingHorizontal: 8, 
  },
});

export default WhatsAppScreen;
