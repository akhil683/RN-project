import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Akhil Palsra',
      status: 'Just an extra ordinary student',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rA6YX_esd7D4wNfWozmFPCIW5QHo2dnUu05OoyLf9QcUDc9RPdTgpOkv1ye2pQp_QhE&usqp=CAU",
    },
{
      uid: 2,
      name: 'Shviansh',
      status: 'Just an extra ordinary student',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rA6YX_esd7D4wNfWozmFPCIW5QHo2dnUu05OoyLf9QcUDc9RPdTgpOkv1ye2pQp_QhE&usqp=CAU",
    },
    {
      uid: 3,
      name: 'Rishu Thakur',
      status: 'Just an extra ordinary student',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rA6YX_esd7D4wNfWozmFPCIW5QHo2dnUu05OoyLf9QcUDc9RPdTgpOkv1ye2pQp_QhE&usqp=CAU",
    },
    {
      uid: 4,
      name: 'Dheeraj',
      status: 'Just an extra ordinary student',
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3rA6YX_esd7D4wNfWozmFPCIW5QHo2dnUu05OoyLf9QcUDc9RPdTgpOkv1ye2pQp_QhE&usqp=CAU",
    },
  ]
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView 
        style={styles.container}
        scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
           <Image 
            source={{
              uri:imageUrl,
            }} 
            style={styles.userImage}
          />
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userStatus}>{status}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  headingText: {
    marginLeft: 12,
    marginTop: 8,
    fontSize: 28,
    fontWeight: 'bold',
    color: 'red',
  },
  container: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  userCard: {
    padding: 4,
    marginVertical: 12,
    backgroundColor: 'red',
    borderRadius: 16,
  },
  userImage:{
    height: 250,
    borderRadius: 12,
    marginBottom: 8,
  },
  userName: {
    marginHorizontal: 12,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', 
  },
  userStatus: {
    color: '#ffffff',
    marginHorizontal: 12,
    marginBottom: 12,
  },
})