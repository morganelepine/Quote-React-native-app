import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native"; //équivalent de BrowserRouter
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

//Importer les routes (=screens)
import HomeScreen from "./screens/HomeScreen.js";
import AboutScreen from "./screens/AboutScreen.js";
import ContactScreen from "./screens/ContactScreen.js";
// import NavBar from "./components/NavBar.js";

function NavBar({ navigation }) {
  return (
    <>
      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => {
          navigation.navigate("About", {
            id: 86,
            otherParam: "Another random param",
          });
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.smallButton}
        onPress={() => {
          navigation.navigate("About", {
            id: 86,
            otherParam: "Another random param",
          });
        }}
      >
        <Text>Contact</Text>
      </TouchableOpacity>
    </>
  );
}

export default function App() {
  const [data, setData] = useState("Author :");

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            // headerTitle: (props) => <NavBar {...props} />,
            headerStyle: {
              margin: 0,
            },
            headerTitleAlign: "center",
            // headerShown: false,
          }}
        >
          <Stack.Screen name="Home" options={{ title: "Quote of the day" }}>
            {/* ...props = une copie des 2 props qu'il y a de base dans Stack.Screen (navigation et route) */}
            {(props) => <HomeScreen {...props} data={data} />}
          </Stack.Screen>

          <Stack.Screen
            name="About"
            component={AboutScreen}
            options={{ title: "About" }}
          />

          <Stack.Screen
            name="Contact"
            component={ContactScreen}
            options={{ title: "Contact" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

//-----------------CSS

const styles = StyleSheet.create({
  smallButton: {
    alignItems: "center",
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#ffeff7",
  },
});
