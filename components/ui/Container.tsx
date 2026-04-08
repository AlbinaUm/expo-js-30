import React, {PropsWithChildren} from 'react';
import {SafeAreaView, StyleSheet, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 16,
    },
});

const Container: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    {children}
                </View>
            </SafeAreaView>
        </SafeAreaProvider>

    );
};

export default Container;