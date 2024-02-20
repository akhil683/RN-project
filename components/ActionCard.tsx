import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)
  }
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={[styles.card, styles.elevatedCard]}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 ?
          </Text>
          <Image 
            source={{
               uri: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D'
            }}
            style={styles.cardImage}
          />
          <View style={styles.bodyContainer}>
            <Text numberOfLines={3} style={styles.actionDescription}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam fuga rerum velit ipsum nulla voluptas ad ut, sed sunt saepe libero cumque dolorum quis atque eligendi cum dolorem qui fugit omnis ratione molestias earum vero distinctio excepturi? Nulla consequuntur ea debitis voluptatum porro deserunt. Ad doloremque inventore illum deleniti pariatur earum reprehenderit blanditiis.
            </Text>
          </View>
          <View style={styles.footerContainer}>
            <TouchableOpacity onPress={() => openWebsite("https://www.test-hermetica.vercel.app")}>
              <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite("https://www.test-hermetica.vercel.app")}>
              <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>

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
    padding: 4,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 20,
  },
  elevatedCard: {
    backgroundColor: 'orange',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headerText: {
    marginLeft: 8,
    color: 'black',
    fontSize: 18,
   marginVertical: 8,
   paddingHorizontal: 8, 
    fontWeight: '600',
  }, 
  cardImage: {
    height: 300,
  },
  bodyContainer: {
    padding: 10,
  },
  actionDescription: {
    color: 'white',
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 12,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 6,
  }
})