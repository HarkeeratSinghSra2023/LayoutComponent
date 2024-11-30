import React from "react";
import {StyleSheet, View, Text } from 'react-native';

function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerTxt}> &copy; Harkeerat Singh Sra </Text>
        </View>
    )
}

const styles = StyleSheet.create( {
    footer: {
        backgroundColor: 'red',
        padding: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerTxt: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    }
})

export default Footer;