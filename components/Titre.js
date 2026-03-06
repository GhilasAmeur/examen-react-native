import { StyleSheet, Text } from "react-native";

export const Titre = ({ text, etoile, onPress }) => {
  return (
    <Text style={styles.txt} onPress={onPress}>
      {text} 
      <Text style={styles.etoile}>{etoile}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  txt: {
    marginTop: 15,
    fontSize: 14,
  },
  etoile: {
    fontSize: 16,
    color: "red",
    fontWeight: "bold",
  },
});
