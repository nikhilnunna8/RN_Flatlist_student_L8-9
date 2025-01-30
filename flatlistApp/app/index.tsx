import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import {useState} from 'react';
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import { DATA } from "@/data/AppData";
import { dataType } from "@/data/AppData";

export default function Index() {
  const [selectedId, setSelectedId] = useState<string>("1") //makes the first item selected by default

  const handleRowPress = (item: dataType) => {
    setSelectedId(item.id);
    console.log("selected " + item.title)
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
            ItemSeparatorComponent={() => (<ListItemSeparator color="blue"/>)}
            renderItem={({item}) => (
              // code that i want to show for every item
              <ListItem 
                item={item}
                isSelected={item.id===selectedId}
                onPress={handleRowPress}
              />
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
});
