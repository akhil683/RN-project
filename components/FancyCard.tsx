import { Image, StyleSheet, Text, View } from 'react-native'
export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D'
          }}
          style={styles.cardImage}
        />
        <View>
          <Text style={styles.cardTitle}>Tasty Food</Text>
          <Text style={styles.cardLabel}>Delicious Food, desi restaurant</Text>
          <Text style={styles.cardDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repudiandae sunt quisquam quod dolore, reiciendis id fugit ea, provident aperiam voluptas deserunt placeat optio.</Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
  
  },
  card: {

  },
  cardElevated: {

  },
  cardImage: {
    height: 240,
    width: 240,
    borderRadius: 12,
  },
  cardTitle: {

  },
  cardLabel: {

  },
  cardDescription: {

  },
  cardFooter: {

  }

})