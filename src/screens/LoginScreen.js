import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput,Button } from 'react-native-paper';

export const LoginScreen = ({ navigation }) => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const Acceder = () => {
    if (user.toUpperCase() === "ADMIN" && password.toUpperCase() === "ADMIN") {
      navigation.navigate('ListAuthorsScreen');
    }
  }

  return (
    <View style={ styles.container }>
        <Text style={styles.title}> Login </Text>
        <View>
            <TextInput
                label="User"
                mode="outlined"
                onChangeText={ text => setUser(text) }
                style={ styles.input }
                value={ user }
            />
            <TextInput
                label="Password"
                mode="outlined"
                style={ styles.input }
                onChangeText={ text => setPassword(text) }
                value={ password }
            />
            <Button style={ styles.button } mode="contained" onPress={() => console.log('Presionado')}>
              Iniciar Sesión
            </Button>
        </View>
        <View>
          <Text style= {styles.text}>OR</Text>
          <Button style={ styles.button_invited } mode="contained" onPress={() => Acceder}>
              Usuario Invitado
          </Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20
  },
  button_invited: {
    marginTop: 10,
    backgroundColor: '#b9c4cd'
  },
  container: {
    margin: 10,
    padding: 10
  },
  input: {
    marginBottom: 20
  },
  text: {
    margin: 25, 
    fontWeight: 'bold', 
    fontSize: 16,
    textAlign: 'center' 
  },
  title: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});