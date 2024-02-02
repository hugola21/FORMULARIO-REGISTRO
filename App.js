import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, CheckBox, Picker } from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [numeroTelefono, setNumeroTelefono] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('');
  const [aceptarTerminos, setAceptarTerminos] = useState(false);

  const handleRegistro = () => {
    
    console.log('Información del formulario:', {
      nombre,
      apellido,
      correoElectronico,
      contrasena,
      confirmarContrasena,
      numeroTelefono,
      fechaNacimiento,
      genero,
      aceptarTerminos
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuarios</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={text => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Apellido"
        value={apellido}
        onChangeText={text => setApellido(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={correoElectronico}
        onChangeText={text => setCorreoElectronico(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={text => setContrasena(text)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry
        placeholder="Confirmar Contraseña"
        value={confirmarContrasena}
        onChangeText={text => setConfirmarContrasena(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Número de Teléfono"
        value={numeroTelefono}
        onChangeText={text => setNumeroTelefono(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Nacimiento"
        value={fechaNacimiento}
        onChangeText={text => setFechaNacimiento(text)}
      />
      <Picker
      title='Género'
        selectedValue={genero}
        style={styles.input}
        onValueChange={itemValue => setGenero(itemValue)}>
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Femenino" value="Femenino" />
        <Picker.Item label="Otro" value="Otro" />
      </Picker>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={aceptarTerminos}
          onValueChange={isChecked => setAceptarTerminos(isChecked)}
        />
        <Text style={styles.label}>Aceptar Términos y Condiciones</Text>
      </View>
      <Button
        title="Registrarse"
        onPress={handleRegistro}
        disabled={!aceptarTerminos}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000000',
  },
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 13,
    marginBottom: 8,
    padding: 8,
    borderColor: '#000000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    marginLeft: 8,
    color: '#000000',
  },
});