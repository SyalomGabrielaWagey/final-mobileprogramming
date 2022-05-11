import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Mini, ProductImage } from '../../assets'
import { Button } from '../atoms'

const Product = ({harga, disc }) => {
  return (
    <View style={styles.container}>
      <Mini />
      <Text style={styles.disc}>{disc}</Text>
      <Text style={styles.value}>Rp. {harga}</Text> 
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    value: {
        fontFamily: 'Poppins-Medium',
        fontSize: 24,
        color: 'black',
    },
    container: {
      flexDirection: 'row',
      paddingVertical: 10,
      paddingHorizontal: 24,
      justifyContent: 'space-between',
      borderRadius: 8,
      shadowColor: 'grey',
      shadowOffset: {
          width: 0,
          height: 0.5,
      },
      shadowOpacity: 0.1,
      shadowRadius: 0.5,
      elevation: 1,
      alignItems: 'center',
  },
  disc: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    textDecorationLine: 'line-through',
    color: 'red',
  }
})