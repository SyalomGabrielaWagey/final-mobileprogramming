import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { Button, Header } from '../components'
import Product from '../components/molecules/Product'
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

const Home = ({navigation}) => {
    const [selectedCategories, setSelectedCategories] = useState();
    
  return (
    <View>
      <Header title="HOME" onBack={() => (navigation.goBack())} />
       <View style={styles.btnWrapper}>
        <View style={styles.navBtn}>
            <Button title="New" onPress={() => navigation.navigate('NewArrival')}/>
        </View>
        <View style={styles.navBtn}>
            <Button title="Sale" onPress={() => navigation.navigate('Sale')} />
        </View>
        <View style={styles.navBtn}>
            <Button title="Filter" />
                <Picker 
                selectedValue={selectedCategories}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedCategories(itemValue)
                }>
                <Picker.Item label="FILTER" value="disabled" color='#aaa'/>
                <Picker.Item label="T-SHIRT" value="tshirt" />
                <Picker.Item label="SHIRT" value="shirt" />
                <Picker.Item label="JEANS" value="jeans" />
                <Picker.Item label="SKIRT" value="skirt" />
                <Picker.Item label="JACKET" value="jacket" />
            </Picker>
         </View>
        </View>
       </View>
       <View style={styles.products}>
       <ScrollView showsVerticalScrollIndicator={false} >
            <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')} activeOpacity={0.5}>
            <Product harga={490000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={570000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={180000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={250000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={380000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={160000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={240000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={500000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={310000} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
            <Product harga={220000} />
            </TouchableOpacity>
        </ScrollView>
        </View> 
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    navBtn: {
        borderRadius: 30,
        width: 100,
    },
    btnWrapper: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    products: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    picker: {
        width: 130,
    }

})
