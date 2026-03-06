import { StyleSheet, Text } from "react-native";

export const Error = ({ text }) => {
  return <Text style={styles.headerTitle}>{text}</Text>;
};

const styles = StyleSheet.create({
  headerTitle: {
    color: "red",
    fontSize: 13,
    fontWeight: "condensed",
  },
});
