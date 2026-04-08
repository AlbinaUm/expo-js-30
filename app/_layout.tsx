import {Link, Stack} from 'expo-router';
import 'react-native-reanimated';
import {SafeAreaView, TouchableOpacity, View, Text, StyleSheet} from "react-native";

export default function RootLayout() {

  return (
    <SafeAreaView style={styles.safeArea}>
        <Stack screenOptions={{headerShown: false, animation: 'slide_from_right'}}/>
        <View style={styles.pagesLinks}>
             <Link href='/' asChild>
                 <TouchableOpacity>
                     <Text>Home</Text>
                 </TouchableOpacity>
             </Link>

            <Link href='/users' asChild>
                <TouchableOpacity>
                    <Text>Users</Text>
                </TouchableOpacity>
            </Link>

            <Link href='/about' asChild>
                <TouchableOpacity>
                    <Text>About us</Text>
                </TouchableOpacity>
            </Link>
        </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    pagesLinks: {
        width: '80%',
        marginHorizontal: 'auto',
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
});
