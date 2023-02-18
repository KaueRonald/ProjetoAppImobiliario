import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import AuthStackNavigator from './src/routes/AuthStackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}