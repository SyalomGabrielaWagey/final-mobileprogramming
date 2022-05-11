import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header } from '../components'
import { ProductImage } from '../assets'

const ProductDetails = ({navigation}) => {
  return (
    <View >
      <Header title="PRODUCT" onBack={() => navigation.goBack()} />
      <View style={styles.image}>
        <ProductImage />
        <Text style={styles.value}>Rp. 490000</Text>
      </View>
      <View style={styles.descWrapper}>
          <Text style={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Gap height={16} />
          <Button title="BUY" onPress={() => navigation.navigate('Payment')} />
      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        paddingHorizontal: 24,
    },
    value: {
        fontFamily: 'Poppins-Regular',
        fontSize: 28,
        color : 'black',
    },
    desc: {
        color: 'black',
        fontFamily: 'Poppins-Regular',
        fontSize: 18,
    },
    descWrapper: {
        paddingHorizontal: 24,
    }
})