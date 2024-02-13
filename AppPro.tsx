import React from 'react';
import {
  View, 
  Text,
  StyleSheet,
  useColorScheme,
} from "react-native";

const AppPro = (): JSX.Element => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={styles.container} >
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hello App Pro
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  whiteText: {
    color: 'red',
  },
  darkText: {
    color: 'blue',
  }
})

export default AppPro;