import React, {useEffect, useState} from "react";
import {Image, StyleSheet, Dimensions, View, ScrollView} from "react-native";
import Swiper from 'react-native-swiper/src';

const {width} = Dimensions.get("window");

const Banner = () => {
    const [bannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData(["https://e0.pxfuel.com/wallpapers/365/505/desktop-wallpaper-sport-girl-yellow-thigh-sportswear-fitness-professional-muscle-muscle-girl.jpg",
            "https://st.focusedcollection.com/14026668/i/650/focused_180512714-stock-photo-trail-runner-man-training-nature.jpg",

        ]);
        return () => {
            setBannerData([]);
        }
    }, []);

    return(
        <View style={styles.container}>
            <View style={styles.swiper}>
                <Swiper
                    showButtons={false}
                    autoplay={true}
                    autoplayTimeout={2}
                >
                    {bannerData.map((item) => {
                        return(
                            <Image key={item} style={styles.image} resizeMode='contain' source={{uri: item}} />
                        )
                    })}
                </Swiper>
                <View style={{height: 20}}>

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gainsboro'
    },
    swiper: {
        width: width,
        alignItems: 'center',
        marginTop: 10
    },
    image: {
        height: width / 2,
        width: width - 40,
        borderRadius: 10,
        marginHorizontal: 20
    }
})

export default Banner;