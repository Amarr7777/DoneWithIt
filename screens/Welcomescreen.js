import { ImageBackground , StyleSheet, View } from 'react-native';

function Welcomescreen() {
    const backgroundImage = {uri:'/Users/amargnath/Documents/DoneWithIt/assets/background.jpg'};
  return (
    <ImageBackground source={backgroundImage} style={styles.image}>
        <View style={styles.placeholder}>
          <View style={styles.login}>
            
          </View>
          <View style={styles.signup}>

          </View>

        </View>
      </ImageBackground>
  )
}

const styles = StyleSheet.create({
    image:{
        flex: 1,
        resizeMode:'cover',
        justifyContent: 'center'
      },
      placeholder: {
        paddingTop: '180%',
        flex:1,
        justifyContent: 'bottom'
      },
      login:{
        height: '1%',
        backgroundColor: '#fc5c65',
        flex: 1
      },
      signup:{
        backgroundColor: '#4ECDC4',
        flex: 1
      },
})

export default Welcomescreen