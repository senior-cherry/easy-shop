import React from 'react';
import {StyleSheet, View, Dimensions, Image, Text, Button} from "react-native";

const {width} = Dimensions.get("window");

const ProductCard = (props) => {
    const {name, price, image, countInStock} = props;
    return(
        <View style={styles.container}>
            <Image style={styles.image} resizeMode="contain" source={{uri: image ? image: 'https://img5.goodfon.ru/wallpaper/nbig/a/23/girl-sport-devusha-sidit-nogi-naushniki.jpg'}} />
            <View style={styles.card} />
            {/*<Text style={styles.title}>*/}
            {/*    {name.length > 15 ? name.substring(0, 15 - 3) + '...' : name}*/}
            {/*</Text>*/}
            <Text style={styles.price}>${price}</Text>

            {countInStock > 0 ? (
                <View style={{marginBottom: 60}}>
                    <Button title={'Add'} color={'green'} />
                </View>
            ) : <Text style={{marginTop: 20}}>Currently Unavailable</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: (width / 2) - 20,
        height: width / 1.7,
        padding: 10,
        borderRadius: 10,
        marginTop: 55,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: '#fff'
    },
    image: {
        width: (width / 2) - 30,
        height: (width / 2) - 50,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -45
    },
    card: {
        marginBottom: 10,
        width: (width / 2) - 30,
        height: (width / 2) - 110,
        backgroundColor: 'transparent'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: 20,
        color: 'orange',
        marginTop: 10
    }
})

export default ProductCard;