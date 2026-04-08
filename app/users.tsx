import {SafeAreaProvider} from "react-native-safe-area-context";
import {SafeAreaView, StyleSheet, View, Text} from "react-native";

export default function UsersScreen() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                   <Text style={styles.pageTitle}>Users</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        fontSize: 16,
    },
    pageTitle: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 40,
    },
    counterText: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        // Убираем жесткие маленькие размеры width/height
        // Либо делаем их достаточно большими (например, 50)
        width: 50,
        height: 50,
        marginHorizontal: 'auto',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    resetButton: {
        color: '#8d8d8d',
        textDecorationColor: '#8d8d8d',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        fontSize: 20,
        marginHorizontal: 'auto',
        marginVertical: 10
    }
});