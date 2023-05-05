import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar'; //Pour changer le CSS de la status bar
import { ScrollView, View, Text, Button, Pressable, TouchableOpacity, TouchableHighlight, Image, StyleSheet } from 'react-native';
import Picture from '../AwesomeProject/assets/trees.png';
import Constants from "expo-constants"; //Pour avoir la hauteur de la status bar

export default function App() {

  const [quote, setQuote] = useState({text: "", author: ""});
  const [allQuotes, setAllQuotes] = useState({text: "", author: ""});

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setAllQuotes(data);
      });
  }, []);

  // get a quote when allQuotes is populated (=on change of 'allQuotes' value)
  useEffect(() => {
    if(allQuotes.length) getQuote();
  }, [allQuotes]);

  const getQuote = () => {
    const randomNumber = Math.floor(Math.random() * allQuotes.length);
    const text = allQuotes[randomNumber].text;
    const author = allQuotes[randomNumber].author;

    setQuote(() => ({
      text: text,
      author: author
    }));
  }

  return (
    <>
      <ScrollView style={{ marginTop: Constants.statusBarHeight }}>
        
        <StatusBar backgroundColor='#e3db7e' style="light"/>

        <Text style={styles.h1}>🗨️ Get a quote 💬</Text>

        <View style={styles.quote}>
          <Text style={{ textAlign: "center", marginBottom: 5 }}>{quote.text}</Text>
          <Text style={{ fontStyle: "italic" }}>{quote.author}</Text>
        </View>

        <View style={{ margin: 15 }}>

          {/* <Text numberOfLines={3} style={{ backgroundColor: "#dfefe4", padding: 10, marginBottom: 10 }}>
            Lorem ipsum dolor sit amet. Est odio perspiciatis eum animi pariatur id vero consectetur
            ut cumque neque qui perspiciatis repellendus aut assumenda maxime. Ut suscipit voluptate sit veritatis soluta
            est delectus delectus quo sunt laudantium et sequi debitis et consequuntur veniam cum tempora incidunt!
          </Text> */}


          {/* <Button title="Submit" onPress = {() => {alert("Pas de CSS avec Button !")}}/> */}

          <Pressable style={styles.button} onPress = {getQuote}>
            <Text>Get a quote with Pressable</Text>
          </Pressable>

          <TouchableOpacity style={styles.button} onPress = {getQuote}>
            <Text>Get a quote with TouchableOpacity</Text>
          </TouchableOpacity>

          <TouchableHighlight style={styles.button} onPress = {getQuote}>
            <Text>Get a quote with TouchableHighlight</Text>
          </TouchableHighlight>

        </View>

        <View style={[styles.bloc, styles.bloc1]}>
          <Image source={Picture} style={styles.image} resizeMode='contain'></Image>
        </View>

        <View style={[styles.bloc, styles.bloc2]}>
          <View style={[styles.smallBloc, styles.smallBloc1]}></View>
          <View style={styles.smallBloc}></View>
          <View style={styles.smallBloc}></View>
        </View>

        <View style={[styles.bloc, styles.bloc3]}>
          <Image
            source={require("../AwesomeProject/assets/9041282_github_icon.png")}
            style={styles.image}
            resizeMode='contain'>
          </Image>
        </View>

        <View style={[styles.bloc, styles.bloc4]}></View>

      </ScrollView>

    </>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    textAlign: "center",
    margin: 20
  },

  quote: {
    backgroundColor: "#dfefe4",
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 20,
  },
  
  bloc: {
    height: 300,
    padding: 10
  },
  bloc1: {
    backgroundColor: "#ffe9dd"
  },
  bloc2: {
    backgroundColor: "#a4c993",
    flexDirection: "row"
  },
  bloc3: {
    backgroundColor: "#cccdde"
  },
  bloc4: {
    backgroundColor: "#dfefe4"
  },

  smallBloc: {
    backgroundColor: "#e3db7e",
    height: 70,
    width: 70,
    margin: 10
  },
  smallBloc1: {
    flex: 3
  },

  image: {
    height: "100%",
    width: "100%"
  },

  button: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 5,
    backgroundColor: '#e3db7e',
    margin: 10
  }
})
