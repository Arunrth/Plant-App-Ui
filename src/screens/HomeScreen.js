import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const HomeScreen = () => {
    console.log('git check')
    return (
        <View style={styles.mainV}>
            <View style={styles.firstV}>
                <View style={styles.textV}>
                    <Text style={styles.welcomeT}>Welcome to</Text>
                    <Text style={styles.plantT}>Plant Shop</Text>
                    {/* <Text style={{ color: '#00B761', fontSize: 30, fontWeight: 'bold' }}>Plant Shop</Text> */}
                </View>
                <MaterialIcons name='shopping-cart' size={30} color='black' />
            </View>

            <View style={styles.inputV} >
                <View style={styles.inputS} >
                    <MaterialIcons name='search' size={22} color='black' style={{ marginLeft: 7, fontWeight: 'bold' }} />
                    <TextInput placeholder='Search' style={styles.inputT} />
                </View>
                <View style={styles.sortV}>
                    <MaterialIcons name='sort' size={35} color='white' />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    sortV: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: '#22CB5C',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    inputT: {
        fontSize: 17,
        flex: 1,
        fontWeight: 'bold',
        // marginLeft: 
    },
    inputV: {
        marginTop: 20,
        flexDirection: 'row'
    },
    inputS: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 15,
        // marginTop: 20,
        alignItems: 'center',
        flex: 1,
        borderWidth: 1,
        borderColor: 'black'
    },
    plantT: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#22CB5C'
    },
    welcomeT: {
        fontSize: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    textV: {

    },
    firstV: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mainV: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        marginTop: 20
    },
})