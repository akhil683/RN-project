import { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const App = () => {
  const [ randomBackground, setRandomBackground ] = useState("#ffffff")
  const generateColor = () => {
    const hexRange = '1234567890ABCDEF'
    let color = '#'
     
    for ( let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() *16)]
      setRandomBackground(color);
    }
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground}/> 
      <View style={[ styles.container, { backgroundColor: randomBackground }]}>
          <TouchableOpacity onPress={generateColor}>
            <View style={styles.actionBtn}>
              <Text style={styles.actionBtnText}>Press Me</Text>
            </View>
          </TouchableOpacity>
      </View>
    </>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '#6A1840',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnText: {
    color: 'white',
    fontSize: 24,
    textTransform: 'uppercase',
  }
})

export default App;