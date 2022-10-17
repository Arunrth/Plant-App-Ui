import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

class Card extends Component {

    render() {
        const { data } = this.props
        return (
            <View style={styles.cardV}>
                <View style={styles.likeS}>
                    <View style={[styles.heartV, { backgroundColor: data.like ? 'rgba(255,42,42,0.4)' : 'rgba(0,0,0,0.2)', }]}>
                        <Ionicons name='heart' size={20} color={data.like ? 'red' : 'black'} />
                    </View>
                </View>
                <View style={{ height: 100, alignItems: 'center' }}>
                    <Image source={data.image} style={{ flex: 1, resizeMode: 'contain' }} />
                </View>
                <Text style={styles.plantName}>{data.name} </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: 'bold', color: 'darkblue' }}>${data.price} </Text>
                    <View style={styles.plusV}>
                        <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20, textAlign: 'center' }}>+</Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Card

const width = Dimensions.get('screen').width / 2 - 38

const styles = StyleSheet.create({
    plusV: {
        height: 26,
        width: 26,
        borderRadius: 5,
        backgroundColor: '#1FAA59',
        justifyContent: 'center',
        alignItems: 'center'
    },
    plantName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        color: '#1FAA59'
    },
    likeS: {
        alignItems: 'flex-end',
    },
    heartV: {
        height: 30,
        width: 30,
        borderRadius: 15,
        // borderWidth: 1,
        // borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5

    },
    cardV: {
        height: 200,
        width: width,
        marginHorizontal: 4,
        borderRadius: 10,
        // marginBottom: 20,
        marginTop: 20,
        padding: 5,
        backgroundColor: '#ebeae8',
        // backgroundColor: 'green',
    }
})