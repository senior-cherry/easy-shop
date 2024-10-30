import React from "react";
import {View, StyleSheet, Dimensions} from "react-native";
import {Content, Left, Body, ListItem, Thumbnail, Text} from "native-base";

const {width} = Dimensions.get("window");

const SearchedProduct = (props) => {
    const {productsFiltered} = props;
    return(
        <Content style={{width: width}}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem
                        key={item.id}
                        avatar
                    >
                        <Left>
                            <Thumbnail
                                source={{uri: item.image ?
                                        item.image: 'https://img5.goodfon.ru/wallpaper/nbig/b/5d/girl-model-fitness-sport-body-blonde-woman-tanned.jpg'}}
                            />
                        </Left>
                        <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.description}</Text>
                        </Body>
                    </ListItem>
                ))
            ) : (
                <View style={styles.center}>
                    <Text style={{alignSelf: 'center'}}>
                        No products match the selected criteria
                    </Text>
                </View>
            )}
        </Content>
    );
}

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SearchedProduct;