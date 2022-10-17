import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const HeaderInput = () => {
    return (
        <View style={styles.mainV}>
            <View style={styles.headerV}>
                <View style={styles.titleV}>
                    <Text style={styles.welcomeT}>Welcome to</Text>
                    <Text style={styles.plantT}>Plant Shop</Text>
                </View>
                <MaterialIcons name='shopping-cart' size={34} color='black' />
            </View>
            <View style={styles.mainInput} >
                <View style={styles.inputV}>
                    <MaterialIcons name='search' size={24} color='black' />
                    <TextInput placeholder='Search' />
                </View>
            </View>
        </View>
    )
}

export default HeaderInput

const styles = StyleSheet.create({
    inputV: {
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: 'row'
    },
    mainInput: {

    },
    plantT: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#22CB5C'
    },
    welcomeT: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    titleV: {

    },
    headerV: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    mainV: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20
    }
})