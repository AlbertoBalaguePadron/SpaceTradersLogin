import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
const ShipCard = ({ ship }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{ship.type}</Text>
            <View style={styles.imageContainer}>
                {
                    ship.class === "MK-I"
                        ? (
                            <Image source={require('../assets/MK-I.png')} style={styles.images} resizeMode="contain" />
                        ) : (ship.class === "MK-II"
                        ) ? (
                            <Image source={require('../assets/MK-II.png')} style={styles.images} resizeMode="contain" />
                        ) : (ship.class === "MK-III"
                        ) ? (
                            <Image source={require('../assets/MK-III.png')} style={styles.images} resizeMode="contain" />
                        ) : (
                            <Image source={require('../assets/MK-IV.png')} style={styles.images} resizeMode="contain" />
                        )
                }
            </View>
            <View style={styles.content}>
                <Text>Class: {ship.class}</Text>
                <Text>Manufacturer: {ship.manufacturer}</Text>
                <Text>Max Cargo: {ship.maxCargo}</Text>
                <Text>Plating: {ship.plating}</Text>
                <Text>Speed: {ship.speed}</Text>
                <Text>Loading Speed: {ship.loadingSpeed}</Text>
                <Text>Weapons: {ship.weapons}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    imageContainer: {
        flex: 1,
        height: "100%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    images: {
        width: 200,
        height: 200,
    },
    content: {
        flex: 2,
        marginLeft: 10,
    },
});

export default ShipCard;
