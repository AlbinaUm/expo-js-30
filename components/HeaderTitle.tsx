import React from 'react';
import {StyleSheet, Text} from "react-native";

interface Props {
    title: string;
}

const styles = StyleSheet.create({
    pageTitle: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 40,
    },
});

const HeaderTitle: React.FC<Props> = ({title}) => {
    return (
        <Text style={styles.pageTitle}>{title}</Text>
    );
};

export default HeaderTitle;