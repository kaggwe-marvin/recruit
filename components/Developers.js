import { StyleSheet, Text, View, ScrollView, Image} from 'react-native'
import React from 'react'

const Developers = () => {
  return (
    
    <ScrollView contentContainerStyle>
    <View style={styles.container}>
      <Image
    style={styles.heroImage}
    source={{uri: 'https://mglsd.go.ug/wp-content/uploads/2019/06/1140.png'}}
    resizeMode="contain"
      />

      <Text style={styles.title}>Our Team</Text>
      <Text style={styles.subtitle}>We are the talented individuals behind the development of our mobile  application. This dedicated team members has put their skills and expertise into creating a seamless and user-friendly experience for our users. Get to know the brilliant minds responsible for bringing our vision to life!</Text>
     
      <Image
              style={styles.pic}
              source={{uri: 'https://pbs.twimg.com/profile_images/1587902810745716736/QdoDKftt_400x400.jpg'}}
              resizeMode="contain"
            />
      <Text style={styles.team}>MARVIN ISAIAH TUMWEBAZE</Text>
      <Text style={styles.team}>20/U/12365/EVE</Text>
      
      <Image
              style={styles.pic}
              source={{uri: 'https://media.licdn.com/dms/image/D4D22AQGbyLBdLbhpQg/feedshare-shrink_2048_1536/0/1685962067176?e=1688601600&v=beta&t=hdUZEYMFSQITrRZmm-7C7Lzcmy5aUBehzVvXLGGP3-E'}}
              resizeMode="contain"
            />
      <Text style={styles.team}>MAWANGWE CYRUS</Text>
      <Text style={styles.team}>20/U/12329/EVE</Text>
      
      <Image
              style={styles.pic}
              source={{uri: 'https://pbs.twimg.com/profile_images/1536190858382417920/JgrlEPuq_400x400.jpg'}}
              resizeMode="contain"
            />

      <Text style={styles.team}>KEMIGISA RITAH</Text>
      <Text style={styles.team}>20/U/13277/PS</Text>
      
      <Image
              style={styles.pic}
              source={{uri: 'https://pbs.twimg.com/media/Fx2uKEXWYAErj7W?format=jpg&name=medium'}}
              resizeMode="contain"
            />
      <Text style={styles.team}>NEKESA JUDITH</Text>
      <Text style={styles.team}>20/13287/PS</Text>
      
      <Image
              style={styles.pic}
              source={{uri: 'https://pbs.twimg.com/media/Fx2y8pYXwAE4HmF?format=jpg&name=medium'}}
              resizeMode="contain"
            />
      <Text style={styles.team}>NYADOI THERESA</Text>
      <Text style={styles.team}>20/U/13155/PS</Text>
      
      <Image
              style={styles.pic}
              source={{uri: 'https://pbs.twimg.com/media/Fx2uJVTXgAA8BOn?format=jpg&name=medium'}}
              resizeMode="contain"
            />
      <Text style={styles.team}>MUGALA STELLA MARRIS</Text>
      <Text style={styles.team}>19/U/11380/EVE</Text>
      
    </View>
    </ScrollView>
    
  )
}

export default Developers

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
      },

    title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'purple',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'left',
    color: 'darkseagreen',
  },
  team: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  heroImage: {
    width: '130%',
    height: 50,
    marginBottom: 20,
  },
  pic: {
    width: 200,
    height: 200,
    marginRight: 16,
  },
})