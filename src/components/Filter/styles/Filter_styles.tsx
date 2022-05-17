import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    filter_title: {
        textAlign: 'center'
    },
    filter_buttons_container: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    filter_button: {
        margin: 5,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FECECE'
    }
});