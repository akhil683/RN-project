import { StyleSheet, Text, View } from 'react-native'
export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card One</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Card Two</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Card Three</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Card One</Text>
        </View>
      </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 4,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'red',
  }
})