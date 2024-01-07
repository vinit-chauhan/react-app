import { StatusBar } from "expo-status-bar";
import { Component, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import DealList from "./DealList";
import { DealType } from "../types/Deal";

import { fetchInitialDeals } from "../ajax";

type StateType = {
  deals: DealType[];
};

class Home extends Component {
  state: StateType = {
    deals: [],
  };

  async componentDidMount(): Promise<void> {
    const deals = await fetchInitialDeals();
    this.setState({ deals });
  }

  render(): ReactNode {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        {this.state.deals.length > 0 ? (
          <DealList deals={this.state.deals} />
        ) : (
          <Text style={[styles.header]}>BakeSale</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 40,
  },
});

export default Home;
