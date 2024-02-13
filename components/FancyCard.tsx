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
        <View style={styles.cardBody}>
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
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    width: 360,
    height: 400,
    borderRadius: 12,
    marginVertical: 12,
    marginHorizontal: 16,

  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    }
  },
  cardImage: {
    height: 240,
    borderRadius: 12,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: "#000000",
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  cardLabel: {
    color: "#000000",
    fontSize: 16,
    marginBottom: 8,

  },
  cardDescription: {
    color: "#000000",
    fontSize: 12,
    marginBottom: 6,
    flexShrink: 1,
  },
  cardFooter: {
    color: "#000000",
  },
})