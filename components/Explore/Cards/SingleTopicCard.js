import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon2 from "react-native-vector-icons/MaterialIcons";

const SingleTopicCard = ({ route, title, details, openProps }) => {
  const [isOpen, setIsOpen] = React.useState(openProps);
  return (
    <View style={styles.cardBox}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={styles.title}>{title}</Text>
        {isOpen ? (
          <Icon2
            onPress={() => setIsOpen(0)}
            name="keyboard-arrow-down"
            size={22}
            color="#1E64CC"
          />
        ) : (
          <Icon2
            onPress={() => setIsOpen(1)}
            name="keyboard-arrow-right"
            size={22}
            color="#1E64CC"
          />
        )}
      </View>
      {isOpen ? <Text style={styles.details}>{details}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  cardBox: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginTop: 15,
  },
  title: {
    color: "#1E64CC",
    fontSize: 16,
    fontWeight: "500",
  },
  details: {
    color: "#5F789D",
    marginTop: 10,
    lineHeight: 25,
  },
});

export default SingleTopicCard;
