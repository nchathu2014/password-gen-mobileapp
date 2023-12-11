import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
const radioButtonData = [
    {
      uid: 1,
      name: 'Include Lowercase Letters',
      value: 'lowercase',
      isActive: false,
    },
    {
      uid: 2,
      name: 'Include Uppercase Letters',
      value: 'uppercase',
      isActive: false,
    },
    {
      uid: 3,
      name: 'Include Numbers',
      value: 'numbers',
      isActive: false,
    },
    {
      uid: 4,
      name: 'Include Symbols',
      value: 'symbols',
      isActive: false,
    },
  ];
export default function PasswordGen() {
  const [selectedOption, setSelectedOption] = useState(-1);
  const [options, setOptions] = useState(radioButtonData);

  useEffect(()=>{
setOptions(options);
  },[options])
  

  const selectedRadioOption = (val: string) => {
    switch (val) {
      case 'lowercase':
        return 1;
      case 'uppercase':
        return 2;
      case 'numbers':
        return 3;
      case 'symbols':
        return 4;
      default:
        return -1;
    }
  };

  const handleOptionClick = (uid: number) => {
    // console.log('clicked', value);
    // const selectedValueAsNumber =  selectedRadioOption(value);
    // setSelectedOption(selectedValueAsNumber);

    const option:any = options.find(radioButton => {
      return radioButton.uid === uid;
    });
    option.isActive = true;
    setOptions(options);
    console.log(option)

  };

  const handlePasswordGen = () => {
    console.log('handlePasswordGen');
  };

  const handleRest = () => {
    options.forEach(item=> item.isActive = false)
    setOptions(options);
    //console.log("RESET")
   console.log(options)
  };

  console.log('first');
  return (
    <View style={styles.container}>
      <Text style={styles.appHeader}>Password Generator</Text>
      <View style={styles.lengthContainer}>
        <Text style={styles.labelText}>Password Length</Text>
        <TextInput style={styles.textInput} placeholder="Ex.8" />
      </View>
      <View>
        {options?.map(({uid, name, value, isActive}) => (
          <TouchableOpacity
            style={styles.radioButton}
            key={uid}
            onPress={() => handleOptionClick(uid)}>
            <Text style={styles.labelText}>{name}</Text>
            <View style={styles.radioCircle}>
              {isActive && <View style={styles.selectedRadioCircle} />}
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={[styles.button, styles.genButton]}
          onPress={handlePasswordGen}>
          <Text style={styles.buttonText}>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={handleRest}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: '#dfe4ea',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  appHeader: {
    textAlign: 'center',
    fontSize: 25,
    margin: 8,
    fontWeight: 'bold',
    color: '#000',
  },
  lengthContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  radioButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  selectedRadioCircle: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#000',
  },
  buttonGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    margin: 20,
  },
  button: {
    width: 120,
    height: 38,
    padding: 6,
    borderRadius: 8,
  },
  genButton: {
    backgroundColor: 'blue',
  },
  resetButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  labelText: {
    fontSize: 19,
    color: '#000',
  },
});
