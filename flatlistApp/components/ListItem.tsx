import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../styles/colors";
import { dataType } from "@/data/AppData";

// add declaration of the data type
// later learn how to do this in one spot and import it

// declare data type for props here
type propsDataType = {
  item: dataType;
  isSelected: boolean; //determine styling
  onPress: (item: dataType) => void; //replace what was selectedList(item)

}

const ListItem: React.FC<propsDataType> = ({item, isSelected, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style = {[styles.titleContainer, 
        {
          backgroundColor: 
            isSelected ? colors.primary : colors.secondary,
        }
      ]}>
        <Text style = {[styles.titleText, {
          color:
            isSelected ? colors.text.light : colors.text.dark,
        }]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.primary,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});