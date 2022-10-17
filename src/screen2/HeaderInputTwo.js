import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, FlatList } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import plants from '../model/Plant'
import colors from '../util/Color'
import Card from './Card'
// import Card from './Card'

const HeaderInputTwo = () => {
    const [selectCategory, setSelectCategory] = useState(0);
    const categories = ['POPULAR', 'ORGANIC', 'INDOOR', 'SYNTHETIC'];

    const CategoryList = () => {
        return (
            <View style={styles.categoryV}>
                {
                    categories.map((item, index) => (
                        <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectCategory(index)} >
                            <Text style={[styles.categoryT, selectCategory === index && styles.selectedT]} >{item} </Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        )
    }


    return (
        <View style={styles.mainV}>
            <View style={styles.headerS}>
                <View style={styles.titleS}>
                    <Text style={styles.welcomeT}>Welcome to</Text>
                    <Text style={styles.plantT}>Plant Shop</Text>
                </View>
                <MaterialIcons name='shopping-cart' size={30} color='black' />
            </View>

            <View style={styles.inputV}>
                <View style={styles.inputS}>
                    <MaterialIcons name='search' size={22} color='black' style={{ marginLeft: 7 }} />
                    <TextInput placeholder='Search' style={styles.fieldS} />
                </View>
                <View style={styles.sortV}>
                    <MaterialIcons name='sort' size={34} color='white' />
                </View>
            </View>
            <CategoryList />
            <FlatList
                data={plants}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return <Card data={item} />
                }}
            />
        </View>
    )
}

export default HeaderInputTwo

const styles = StyleSheet.create({
    categoryT: {
        fontWeight: '700',
        color: 'grey'
    },
    selectedT: {
        color: colors.green,
        fontWeight: 'bold',
        borderBottomWidth: 2,
        borderColor: colors.green
    },
    categoryV: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between'
    },
    sortV: {
        backgroundColor: colors.green,
        height: 43,
        width: 43,
        borderRadius: 13,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    fieldS: {
        // fontWeight: 'bold',
        // textAlign: 'center',
        fontSize: 16,
        flex: 1
    },
    inputS: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 43,
        backgroundColor: 'white',
        flex: 1,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 13
    },
    inputV: {
        flexDirection: 'row',
        marginTop: 20

    },
    welcomeT: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold'
    },
    plantT: {
        fontSize: 28,
        // color: '#00D84A',
        color: colors.green,
        fontWeight: 'bold'
    },
    titleS: {

    },
    headerS: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainV: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 30
    },

})