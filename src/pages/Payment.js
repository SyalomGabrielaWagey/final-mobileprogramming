import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Header, Gap } from '../components'
import { ProductImage } from '../assets'
import { useState } from 'react/cjs/react.development'

const Payment = ({navigation}) => {
  const [amount, setAmount] = React.useState(0);

  const incrementAmount = () => {
  setAmount(amount + 1);
  };

  const decrementAmount = () => {
    setAmount(amount - 1);
    };

  return (
    <View>
      <View>
          <Header title="PAYMENT" onBack={() => navigation.goBack()} />
      </View>
      <View style={styles.contentWrapper}>
          <ProductImage />
          <Text style={styles.value}>Rp. 490000</Text>
          <View style={styles.amountWrapper}>
            <View style={styles.btn}>
              <Button title="-" onPress={decrementAmount}/>
            </View>
            <Gap width={5} />
            <Text style={styles.amount}>{amount}</Text>
            <Gap width={5} /> 
            <View style={styles.btn}>
              <Button title="+" onPress={incrementAmount}/>
            </View>
          </View>
      </View>
      <Gap height={10} />
      <View style={styles.totalWrapper}>
        <Text style={styles.value}>Total</Text>
        <Text style={styles.value}>Rp. {490000 * amount} </Text>
        <Button title="PAY" onPress={() => navigation.navigate('OrderSuccess')}/>
      </View>
    </View>
  )
}

export default Payment

const styles = StyleSheet.create({
    contentWrapper: {
      paddingHorizontal: 24,
      alignItems: 'center',
    },
    value: {
      fontFamily: 'Poppins-Regular',
      fontSize: 30,
      color: 'black',
    },
    btn: {
      width: 30,
    },
    amount: {
      fontFamily: 'Poppins-Bold',
      fontSize: 20,
    },
    amountWrapper: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    totalWrapper: {
      paddingHorizontal: 24,
    }
})