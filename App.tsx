import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PropsWithChildren, useState } from 'react'

import dice1 from './assets/dice1.png';
import dice2 from './assets/dice2.png';
import dice3 from './assets/dice3.png';
import dice4 from './assets/dice4.png';
import dice5 from './assets/dice5.png';
import dice6 from './assets/dice6.png';

type DiceProps =PropsWithChildren<{
  imageUrl: ImageSourcePropType
} > 

const Dice = ({ imageUrl } : DiceProps ): JSX.Element => {

  return (
    <View>
      <Image 
        style={styles.diceImage}
        source={imageUrl}
      />
    </View>
  )
}

const App = (): JSX.Element => {
  const [diceImage, setDiceImage ] = useState<ImageSourcePropType>(dice1)

  const rollDiceHandler = () => {
    let randomNumber: number = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(dice1)
        break;
      case 2:
        setDiceImage(dice2)
        break;
      case 3:
        setDiceImage(dice3)
        break;
      case 4:
        setDiceImage(dice4)
        break;
      case 5:
        setDiceImage(dice5)
        break;
      case 6:
        setDiceImage(dice6)
        break;
        default: 
        setDiceImage(dice1)
          break;
    }
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <TouchableOpacity onPress={rollDiceHandler}>
        <View style={styles.BtnContainer}>
          <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  BtnContainer: {
    marginTop: 100,
    backgroundColor: 'red',
    borderRadius: 12,
  },
  rollDiceBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
})
export default App;