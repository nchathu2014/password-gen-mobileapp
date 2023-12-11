import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {number, object} from 'yup';

const passwordLengthSchema = object({
  passwordLength: number()
    .min(4, 'Password min length is 4')
    .max(20, 'Password max length is 20')
    .required('Length is required'),
});

export default function PasswordUI(): JSX.Element {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (length: number) => {
    let charList = '';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digiChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+';

    if (lowercase) {
      charList += lowercaseChars;
    }
    if (uppercaseChars) {
      charList += uppercaseChars;
    }
    if (digiChars) {
      charList += digiChars;
    }
    if (symbolChars) {
      charList += symbolChars;
    }

    let passwordResult = createPassword(charList, length);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  };

  const createPassword = (characters: string, length: number) => {
    let result = '';

    for (let index = 0; index < length; index++) {
      const index = Math.round(Math.random() * length);
      result += characters.charAt(index);
    }

    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowercase(true);
    setUppercase(false);
    setSymbols(false);
    setNumbers(false);
  };

  return (
    <View>
      <Text>PasswordUI</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
