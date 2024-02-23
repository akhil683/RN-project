import { Formik } from 'formik';
import { autocmd } from 'neovim/lib/plugin/autocmd';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
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
  const [ upperCase, setUpperCase ] = useState(false)
  const [ lowerCase, setLowerCase ] = useState(false)
  const [ numbers, setNumbers] = useState(false);
  const [ symbols, setSymbols] = useState(false);

  const generatedPasswordString = (passwordLength: number) => {
    let characterList = "";

    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789"
    const specialChars = "!@#$%^&*()_+='";
    if (upperCase) {
      characterList += upperCaseChars;
    }
    if (lowerCase) {
      characterList += lowerCaseChars;
    }
    if (numbers) {
      characterList += digitChars;
    }
    if (symbols) {
      characterList += specialChars;
    }
    const passwordResult = createPassword(characterList, passwordLength)

    setPassword(passwordResult)
    setIsPassGenerated(true)
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ""
    for (let i =0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random()*characters.length);
      result += characters.charAt(characterIndex)
    }
    return result; 
  }

  const resetPassword = () => {
    setPassword("")
    setIsPassGenerated((false))
    setLowerCase(true)
    setUpperCase(false)
    setNumbers(false)
    setSymbols(false)
  }

  return (
   <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
            <Formik
              initialValues={{ passwordLength: ' '}}
              validationSchema={PasswordSchema}
              onSubmit={values => {
                console.log(values)
                generatedPasswordString(+values.passwordLength)
              }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Password Length</Text> 
                <TextInput style={styles.inputStyle} onChangeText={handleChange('passwordLength')} placeholder='Ex. 8' keyboardType='numeric' />
              </View>
              {touched.passwordLength && errors.passwordLength && (
                  <Text style={styles.errorText}>
                    {errors.passwordLength}
                  </Text>
               )}
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include LowerCase</Text>
                <BouncyCheckbox 
                  disableBuiltInState 
                  isChecked={lowerCase}
                  onPress={() => setLowerCase(!lowerCase)}
                  fillColor='blue'
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include UpperCase</Text>
                <BouncyCheckbox 
                  disableBuiltInState 
                  isChecked={upperCase}
                  onPress={() => setUpperCase(!upperCase)}
                  fillColor='blue'
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Numbers</Text>
                <BouncyCheckbox 
                  disableBuiltInState 
                  isChecked={numbers}
                  onPress={() => setNumbers(!numbers)}
                  fillColor='blue'
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.heading}>Include Symbols</Text>
                <BouncyCheckbox 
                  disableBuiltInState 
                  isChecked={symbols}
                  onPress={() => setSymbols(!symbols)}
                  fillColor='blue'
                />
              </View>

             <View style={styles.formActions}>
              <TouchableOpacity 
                onPress={() => handleSubmit()} 
                disabled={!isValid}
                style={styles.primaryBtn}
              >
                <Text style={styles.primaryBtnText}>Generate Password</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryBtn} onPress={() => {
                handleReset()
                resetPassword();
              }}>
                <Text style={styles.secondaryBtnText}>Reset Password</Text>
              </TouchableOpacity>
             </View>

             </>
            )}
     </Formik> 
        </View>
        {isPassGenerated ? (
          <View style={styles.passwordContainer}>
            <Text selectable={true} style={styles.passwordText}>{password}</Text>
          </View>
        ) : null}
      </SafeAreaView>
   </ScrollView> 
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    padding: 16,
  },
  formContainer: {},
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: 16,
  },
  heading: {
    fontSize: 16,
  },
  errorText: {
    fontSize: 12,
    color: 'red',
  },
  inputWrapper: {
    margin: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputColumn: {
  },
  inputStyle: {
    width: 100,
    paddingHorizontal: 12,
    backgroundColor: '#999',
    borderRadius: 6,
  },
  formActions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20
  },
primaryBtn: {
  width: 150, 
  height: 50,
  justifyContent: 'center',
  backgroundColor: 'blue',
  padding: 8,
  borderRadius: 6,
},
primaryBtnText: {
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
},
secondaryBtn: {
  width: 150,
  height: 50,
  justifyContent: 'center',
  backgroundColor: 'black',
  padding: 8,
  borderRadius: 6,
},
secondaryBtnText: {
  margin: 'auto',
  textAlignVertical: 'center',
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
},
passwordContainer: {
  marginVertical: 42,
},
passwordText: {
  fontSize: 28,
  color: 'green',
  fontWeight: 'bold', 
  textAlign: 'center',
}
})

