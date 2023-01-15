import React from 'react'
import { Container } from './container'
import SystemNavigationBar from 'react-native-system-navigation-bar';
import colors from 'assets/colors/colors';
SystemNavigationBar.setNavigationColor(colors.loginBackGround, 'dark');
export default function App() {
  return (
    <Container />
  )
}