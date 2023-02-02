import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CustomGredient from "../components/CustomGredient";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import Screen from "./Screen";

const menuItems = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
      iconColor: colors.darkAccent,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
      iconColor: colors.darkAccent,
    },
  },
];

function AccountScreen() {
  return (
    <CustomGredient>
      <Screen>
        <View style={styles.container}>
          <ListItem
            image={require("../assets/harry.png")}
            title="Harry Potter"
            subTitle="The Boy Who Lived"
          />
        </View>
        <View style={styles.container}>
          <FlatList
            data={menuItems}
            keyExtractor={(menuItem) => {
              menuItem.title;
            }}
            renderItem={({ item }) => (
              <ListItem
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    iconColor={item.icon.iconColor}
                  />
                }
                onPress={(item) => console.log(item)}
              />
            )}
            ItemSeparatorComponent={ListItemSeparator}
          ></FlatList>
        </View>
        <View style={styles.container}>
          <ListItem
            title="Log Out"
            IconComponent={
              <Icon
                name="logout"
                backgroundColor={colors.secondary}
                iconColor={colors.darkAccent}
              />
            }
            onPress={() => console.log("Log Out")}
          />
        </View>
      </Screen>
    </CustomGredient>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    backgroundColor: colors.backgroundTransparent,
  },
});

export default AccountScreen;
