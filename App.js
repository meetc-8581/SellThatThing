import { StyleSheet, View } from "react-native";
import Card from "./components/Card";
import ListingDetailsScreen from "./screens/ListingDetailsScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ViewImageScreen from "./screens/ViewImageScreen";
// import ViewImageScreen from "./screens/ViewImageScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

export default function App() {
  return (
    // // <WelcomeScreen />
    // // <View style={styles.container}>
    //   {/* <View style={{backgroundColor}} */}
    <MessagesScreen />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#f8f4f4",
    // padding: 20,
    // paddingTop: 100,
  },
});

// ******** Dump ************//

{
  // import {
  //   useDimensions,
  //   useDeviceOrientation,
  // } from "@react-native-community/hooks";
  // console.log(Dimensions.get("screen"));
  // console.log(useDimensions());
  // console.log(useDeviceOrientation());
  // const { landscape } = useDeviceOrientation();
  // let x = 1;
  // const handlePress = () => console.log("Text Pressed");
  // console.log(require("./assets/icon.png"));
  /* <Text numberOfLines={5} onPress={handlePress}>
        Hello World! Open up App.js to start working on your app! Hello World!
        Open up App.js to start working on your app! Hello World! Open up App.js
        to start working on your app!Hello World! Open up App.js to start
        working on your app!Hello World! Open up App.js to start working on your
        app!Hello World! Open up App.js to start working on your app!Hello
        World! Open up App.js to start working on your app!Hello World! Open up
        App.js to start working on your app!Hello World! Open up App.js to start
        working on your app!
      </Text> 
      <TouchableNativeFeedback onPress={handlePress}>
         <StatusBar style="auto" /> 
        <View
          style={{
            width: 200,
            height: 200,
            // marginLeft: 400,
            backgroundColor: "#fab",
            // alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
      </TouchableNativeFeedback> 
      <Button
        color="orange"
        title="Click Me"
        onPress={() => {
          Alert.alert("Hello", "How are you doing?", [
            {
              text: "Good",
              onPress: () => {
                console.log("yes");
              },
            },
            {
              text: "Meh!",
              onPress: () => {
                console.log("No");
              },
            },
          ]),
            Alert.prompt("Hello", "How are you doing?", (text) =>
              console.log(text)
            );
        }}
      />

      <Image
        blurRadius={1}
        source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300",
        }}
      /> 
*/
}
