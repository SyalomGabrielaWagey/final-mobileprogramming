import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Button, Gap, Header, TextInput} from '../components'
import { MiniThrift } from '../assets'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="SIGN IN"/>
      <View style={styles.wel}>
        <Text style={styles.welcome}>WELCOME</Text>
      </View>
      <View style={styles.logo}>
        <MiniThrift/>
      </View>
      <View style={styles.contentWrapper}>
        <TextInput title="Username" placeholder="Enter Your Username"/>
        <Gap height={16} />
        <TextInput title="Password" placeholder="Enter Your Password"/>
        <Gap height={24} />
        <Button title="Log In" onPress={() => navigation.navigate('Home')} />
        <View style={styles.newWrapper}>
          <Text style={styles.signUp}>Are You New?</Text>
          <View style={styles.linkWrapper}>
            <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
          </View>
        </View>
      </View>

    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
  welcome:{
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: 'black',
  },
  page: {
    backgroundColor: '#F8F8F8',
  },
  wel: {
    alignItems: 'center',
  },
  contentWrapper: {
    paddingHorizontal: 24,
  },
  signUp: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
  },
  newWrapper: {
    alignItems: 'center',
    marginTop: 24,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
  linkWrapper: {
    marginTop: 10,
  },
  logo: {
    alignItems: 'center',
    
  }
})