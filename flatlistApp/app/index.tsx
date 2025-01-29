import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import {useState} from 'react';

export default function Index() {
  const [selectedId, setSelectedId] = useState<string>("1") //makes the first item selected by default
  type dataType = {
    id: string; // unique identifier
    title: string;
  }
  const DATA: dataType[] = [
    {id: '1', title: "First"},
    {id: '2', title: "Second"},
    {id: '3', title: "Third"},
    {id: '4', title: "Fourth"}, //can't have the same id for later
  ]

  const selectedList = (item: dataType) => {
    setSelectedId(item.id);
    console.log("selected" + item.title)
  }

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList 
            data = {DATA} //required
            keyExtractor={(item: dataType) => item.id}
            renderItem={({item}) => (
              // code that i want to show for every item
              <TouchableOpacity onPress={() => selectedList(item)}>
                <View style = {[styles.titleContainer, 
                  {
                    backgroundColor: 
                      item.id === selectedId ? colors.primary : colors.secondary,
                  }
                ]}>
                  <Text style = {styles.titleText}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
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
