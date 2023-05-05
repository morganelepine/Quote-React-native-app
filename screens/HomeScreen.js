import { useState, useEffect, useCallback } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar"; //Pour changer le CSS de la status bar
import Constants from "expo-constants"; //Pour avoir la hauteur de la status bar
import Background from "../assets/pexels-angello-4019143.jpg";

import { useFonts } from "expo-font";
import SpaceMono from "../assets/fonts/SpaceMono-Regular.ttf";

// Keep the splash screen visible while we fetch resources
import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

const windowHeight = Dimensions.get("window").height;

export default function HomeScreen({ data, navigation }) {
  //-----------QUOTES
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [allQuotes, setAllQuotes] = useState({ text: "", author: "" });

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setAllQuotes(data);
      });
  }, []);

  // get a quote when allQuotes is populated (=on change of 'allQuotes' value)
  useEffect(() => {
    if (allQuotes.length) {
      getQuote();
    }
  }, [allQuotes]);

  const getQuote = () => {
    const randomNumber = Math.floor(Math.random() * allQuotes.length);
    const text = allQuotes[randomNumber].text;
    const author = allQuotes[randomNumber].author;

    setQuote(() => ({
      text: text,
      author: author,
    }));
  };

  //-----------FONTS
  const [fontsLoaded] = useFonts({
    "SpaceMono-Regular": SpaceMono,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <ScrollView style={styles.container} onLayout={onLayoutRootView}>
        <StatusBar backgroundColor="#e3db7e" style="light" />

        <ImageBackground
          source={Background}
          resizeMode="cover"
          style={styles.background}
        >
          <View style={styles.quote}>
            <Text style={styles.h1}>💬</Text>
            <Text style={styles.quoteText}>{quote.text}</Text>
            <Text>{data}</Text>
            <Text style={{ fontStyle: "italic" }}>{quote.author}</Text>
          </View>

          <View style={{ margin: 20 }}>
            <TouchableOpacity style={styles.button} onPress={getQuote}>
              <Text style={{ fontSize: 20 }}>Get a new quote</Text>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 20 }}>
            <TouchableOpacity
              style={styles.smallButton}
              onPress={() => {
                navigation.push("About", {
                  id: 86,
                  otherParam: "Another random param",
                });
              }}
            >
              <Text style={{ fontSize: 15 }}>Contact me</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </>
  );
}

//-----------------CSS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },

  background: {
    flex: 1,
    justifyContent: "center",
    minHeight: windowHeight,
  },

  h1: {
    color: "white",
    fontSize: 45,
    textAlign: "center",
  },

  quote: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    margin: 20,
    borderRadius: 20,
    minHeight: 400,
  },

  quoteText: {
    textAlign: "center",
    fontSize: 30,
    margin: 20,
    fontFamily: "SpaceMono-Regular",
  },

  button: {
    alignItems: "center",
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#e3db7e",
  },

  smallButton: {
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: "#ecedf6",
  },
});
