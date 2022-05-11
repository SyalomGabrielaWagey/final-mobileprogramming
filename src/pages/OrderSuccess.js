import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SuccessLogo } from '../assets'
import { Button, Gap } from '../components'

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.contentWrapper}>
      <SuccessLogo />
      <Gap height={20} />
      <Text style={styles.success}>Order Success!</Text>
      <Gap height={150} />
      <View style={styles.btn}>
      <Button title="CONTINUE SHOPPING" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}

export default OrderSuccess

const styles = StyleSheet.create({
    contentWrapper: {
        paddingTop: 250,
        paddingHorizontal: 24,
        alignItems: 'center',
    },
    success: {
        fontFamily: 'Poppins-Regular',
        fontSize: 24,
        color: 'black',
    },
    btn: {
        width: 300,
    }
})