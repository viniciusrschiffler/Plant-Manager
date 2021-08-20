import React, { useEffect } from 'react'
import AppLoading from 'expo-app-loading'
import * as Notification from 'expo-notifications'

import Routes from './src/routes';

import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from '@expo-google-fonts/jost';
import { PlantProps } from './src/libs/storage';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  // useEffect(() => {
    //   const subscription = Notification.addNotificationReceivedListener(
    //     async notifications => {
    //       const data = notifications.request.content.data.plant as PlantProps
    //       console.log(data);

    //     })

    //   return () => subscription.remove();


    // async function notifications() {
    //   await Notification.cancelAllScheduledNotificationsAsync();

    //   const data = await Notification.getAllScheduledNotificationsAsync();
    //   console.log('########## NOTIFICAÇÕES AGENDADAS ###########')
    //   console.log(data)
    // }

    // notifications()


  // }, [])


  if (!fontsLoaded)
    return <AppLoading />


  return (
    <Routes />
  );
}

