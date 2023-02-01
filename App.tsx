import { ThemeProvider } from 'styled-components/native';
import theme from './src/theme/theme';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import Home from './src/pages/Home';



export default function App() {
  const { Navigator, Screen } = createNativeStackNavigator();
  const [teste, setTeste] = useState('Email...');


  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          <Screen
            name="Login"
            component={Login}
          />
          <Screen
            name="Register"
            component={Register}
          />
          <Screen
            name="Home"
            component={Home}
          />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
