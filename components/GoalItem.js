import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View onPress={props.onDeleteItem.bind(this, props.id)}>
      <Pressable android_ripple={{ color: "#dddddd" }} style={styles.goalItem}>
        <Text style={styles.textItem}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  textItem: {
    color: "#ffff",
    padding: 8,
  },
});
