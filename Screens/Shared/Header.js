import React from "react";
import {StyleSheet, SafeAreaView, Text} from "react-native";
import * as Font from 'expo-font';

let customFonts = {
    'AnandaBlack': require('../../../motion-spirit/assets/fonts/AnandaBlackPersonalUseRegular-rg9Rx.ttf'),
};

class Header extends React.Component{
    state = {
        fontsLoaded: false,
    };

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync().then(r => console.log(r));
    }

    render() {
        return (
            <SafeAreaView style={styles.header}>
                <Text style={{fontFamily: 'AnandaBlack', fontSize: 24}}>Motion Spirit</Text>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        marginTop: 200
    }
});

export default Header;