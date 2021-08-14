import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, 
    Dimensions, ScrollView
} from 'react-native';

const OPTIONS = ['Medical Leave','Casual Leave','Annual Leave','Maternity Leave','Unpaid Leave'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {

    const onPressItem = (option) => {
        props.changeModalVisibility(false);
        props.setData(option);
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>

            </TouchableOpacity>
        )

    })

    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}>
           <View 
            style={[styles.modal, {width:WIDTH - 20, height: HEIGHT/3 }]}>

                <ScrollView>
                    {option}
                </ScrollView>
           </View>
        </TouchableOpacity>
    );
}

export default ModalPicker;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
        //backgroundColor: '#DCDCDC',
    },

    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },

    text: {
        fontSize: 15,
        margin: 20,
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    option: {
        alignItems: 'flex-start',
    },
})