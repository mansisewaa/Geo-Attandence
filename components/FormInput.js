
import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

//import AntDesign from "react-native-vector-icons/AntDesign";
import { windowHeight, windowWidth } from '../utils/Dimensions';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {
    return (
        <View style={styles.inputcontainer}>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    inputcontainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
       // width: 300,
        //height: 40,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15, 
        fontSize: 16,
    },

    iconStyle: {
        padding: 10,
        height: '100%',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50, 
    },

    input : {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});