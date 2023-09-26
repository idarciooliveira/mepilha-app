import { StatusBar } from "expo-status-bar";
import { colors } from "./src/config/colors";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./src/routes/AppNavigator";
import * as SplashScreen from 'expo-splash-screen';
import { atom, useAtom } from "jotai";
import { userAtom } from "./src/hooks/useAuth";
import { useEffect } from "react";
import authStorage from './src/config/storage'
import Localstorage from './src/config/local-storage'
import { SWRConfig } from "swr";

SplashScreen.preventAutoHideAsync();

const appLaunchAtom = atom(true)
const isAppReadyAtom = atom(false)

export default function App() {

  const [firstLaunch, setFirstLaunch] = useAtom(appLaunchAtom)
  const [isReady, setIsReady] = useAtom(isAppReadyAtom)
  const [, setUser] = useAtom(userAtom)

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  const isLaunchedBefore = async () => {
    const result = await Localstorage.get('appLaunched')
    if (result == null) {
      setFirstLaunch(true)
      await Localstorage.save('appLaunched', 'false')
    } else {
      setFirstLaunch(false)
    }
  }


  const onStartup = async () => {
    await restoreUser()
    await isLaunchedBefore()
    setIsReady(true)
    await SplashScreen.hideAsync()
  }

  useEffect(() => {
    onStartup()
  }, []);

  if (!isReady) return null

  return (
    <SWRConfig value={{
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      revalidateIfStale: true,
      focusThrottleInterval: 5000
    }}>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.background} />
        <AppNavigator firstLaunch={firstLaunch} />
      </NavigationContainer>
    </SWRConfig>
  );
}

