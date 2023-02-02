import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Card from "../components/Card";
import CustomGredient from "../components/CustomGredient";
import colors from "../config/colors";
import Screen from "./Screen";

const listings = [
  {
    id: 1,
    title: "Grifindor Robes for sale",
    price: 100,
    image: require("../assets/robes.jpg"),
  },
  {
    id: 2,
    title: "Elder wand for sale",
    price: 200,
    image: require("../assets/wand.jpg"),
  },
];

function ListingScreen() {
  return (
    <CustomGredient>
      <Screen styles={styles.screen}>
        <View style={styles.container}>
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={"$" + item.price}
                image={item.image}
              />
            )}
            // ItemSeparatorComponent={ListItemSeparator}
          ></FlatList>
        </View>
      </Screen>
    </CustomGredient>
  );
}

const styles = StyleSheet.create({
  container: {},
  screen: { padding: 20, backgroundColor: colors.backgroundTransparent },
});

export default ListingScreen;
