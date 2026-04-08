import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
const styles = StyleSheet.create({
    button: {
        width: 50,
        height: 50,
        marginHorizontal: 'auto',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }
});

interface Props {
    bgColor: string;
    buttonText: string;
    onIncrement: () => void;
}


const ButtonCounter: React.FC<Props> = ({bgColor, onIncrement, buttonText}) => {
    return (
        <TouchableOpacity onPress={onIncrement} style={[styles.button, { backgroundColor: bgColor}]}>
            <Text style={{ fontSize: 20}}>{buttonText}</Text>
        </TouchableOpacity>
    );
};

export default ButtonCounter;