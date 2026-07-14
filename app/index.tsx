import {StyleSheet, View, Text, TouchableOpacity, Platform, Button} from 'react-native';
import {useEffect, useState} from "react";
import HeaderTitle from "@/components/HeaderTitle";
import Container from "@/components/ui/Container";
import ButtonCounter from "@/components/ui/ButtonCounter";
import {useCounterStore} from "@/store/counterStore";
import {CameraView, useCameraPermissions} from "expo-camera";
import * as Notifications from 'expo-notifications';
import * as Haptics from 'expo-haptics';

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowList: true,
        shouldShowBanner: true,
        shouldSetBadge: false,
        shouldPlaySound: true,
        shouldShowAlert: true,
    })
});


export default function HomeScreen() {
    const {count, increment, decrement, incrementFive, reset} = useCounterStore();
    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        const setupNotifications = async () => {
            await Notifications.requestPermissionsAsync();
          if (Platform.OS === 'android') {
              await Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
              });
          }
        };
        void setupNotifications();
    }, []);

    const scheduleNotification = async () => {
      await Notifications.scheduleNotificationAsync({
          content: {
              title: 'Напоминание!',
              body: 'Пора проверить счетчик',
          },
          trigger: {
              type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
              seconds: 5,
              channelId: 'default',
          }
      });
    };

    const handleIncrement = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        increment();
    };

    const handleDecrement = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        decrement();
    };

    const handleReset = () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        reset();
    };

    if (!permission) return <View/>;
    if (!permission.granted) {
        return (
            <Container>
                <Text style={{marginBottom: 10, textAlign: 'center'}}>Нужен доступ к камере</Text>
                <Button onPress={requestPermission} title="Разрешить доступ"/>
            </Container>
        )
    }


  return (
      <Container>
          <CameraView style={styles.camera} facing="back"/>

          <HeaderTitle title='Мой первый счетчик'/>
          <View>
              <Text style={styles.counterText}>Count: {count}</Text>
          </View>
          <View style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
              <ButtonCounter bgColor={'#5fda40'} buttonText='+' onIncrement={handleIncrement}/>
              <ButtonCounter bgColor={'#da4040'} buttonText='+' onIncrement={handleDecrement}/>
          </View>

          <TouchableOpacity onPress={handleReset}>
              <Text style={styles.resetButton}>Cброс счетчика</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.notifyBtn} onPress={scheduleNotification}>
              <Text style={{color: 'white'}}>Напомнить мне через 5 секунд уведомлением</Text>
          </TouchableOpacity>
      </Container>
  );
}

const styles = StyleSheet.create({
    counterText: {
      fontSize: 20,
      textAlign: 'center',
    },
    resetButton: {
        color: '#8d8d8d',
        textDecorationColor: '#8d8d8d',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        fontSize: 20,
        marginHorizontal: 'auto',
        marginVertical: 10
    },
    notifyBtn: {
        backgroundColor: 'skyblue',
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
    },
    camera: {
        height: 200,
        width: "100%",
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: 20
    }
});
