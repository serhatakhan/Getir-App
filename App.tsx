import "react-native-gesture-handler";
import { LogBox, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import store from "./src/redux/store";
import { Provider } from "react-redux";

// LogBox'u import edip bu şekilde kullanınca uyarılar simülatöre yansımıyor
LogBox.ignoreAllLogs(); // Ignore all log notifications

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: "15%"
  },
});
