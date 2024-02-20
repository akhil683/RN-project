import React, { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import * as Yup from "yup";

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, "Should be min of 4 characters")
  .max(16, "Should be max of 16 characters")
  .required("Length is required")
})

const App = () => {

  const [password, setPassword ] = useState("")
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [ lowerCase, setLowerCase ] = useState(false)
  const [ numbers, setNumbers] = useState(false);
  const [ symbols, setSymbols] = useState(false);

  const generatedPasswordString = (passwordLength: number) => {
    
  }
  const createPassword = (characters: string, passwordLength: number) => {
    let result = ""
    for (let i =0; i < password.length; i++) {
      const characterIndex = Math.round(Math.random()*characters.length);
      result += characters.charAt(characterIndex)
    }
    return result; 
  }
  const resetPassword = () => {

  }

  return (
  <View>
    <Text>Hello World</Text>
  </View>  
  )
}
export default App