import { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { DealType } from "../types/Deal";

type DealListProps = {
  deals: DealType[];
};

export default class DealList extends Component<DealListProps> {
  static propTypes = {
    deals: PropTypes.array.isRequired,
  };

  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({ item }: { item: DealType }) => (
            <Text>{item.title}</Text>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#eee",
    flex: 1,
    width: "100%",
    paddingTop: 30,
  },
});
