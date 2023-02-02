import { React, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CustomGredient from "../components/CustomGredient/CustomGredient";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import Screen from "./Screen";

const intialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  // {
  //   id: 3,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../assets/mosh.jpg"),
  // },
  // {
  //   id: 4,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../assets/mosh.jpg"),
  // },
  // {
  //   id: 5,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../assets/mosh.jpg"),
  // },
  // {
  //   id: 6,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../assets/mosh.jpg"),
  // },
  // {
  //   id: 7,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../assets/mosh.jpg"),
  // },
  // {
  //   id: 8,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../assets/mosh.jpg"),
  // },
  // {
  //   id: 9,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../assets/mosh.jpg"),
  // },
  // {
  //   id: 10,
  //   title: "T2",
  //   description: "D2",
  //   image: require("../assets/mosh.jpg"),
  // },
];

function MessagesScreen({}) {
  const [messages, setMessages] = useState(intialMessages);
  const [refresing, setRefresing] = useState(false);

  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  return (
    <CustomGredient style={{ flex: 1 }}>
      <Screen>
        <FlatList
          data={messages}
          keyExtractor={(messages) => messages.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => {
                console.log("Message Selected", item);
              }}
              renderRightActions={() => (
                <ListItemDeleteAction
                  onPress={() => {
                    handleDelete(item);
                  }}
                />
              )}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
          refreshing={refresing}
          onRefresh={() => {
            setMessages(intialMessages);
          }}
        />
      </Screen>
    </CustomGredient>
  );
}
const styles = StyleSheet.create({});
export default MessagesScreen;
