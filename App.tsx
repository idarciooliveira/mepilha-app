import { StatusBar } from "expo-status-bar";
import { colors } from "./src/config/colors";
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./src/routes/AppNavigator";

export default function App() {

  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.background} />
        <AppNavigator firstLaunch={true} />
      </NavigationContainer>
    </>
  );
}

