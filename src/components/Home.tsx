import { StatusBar } from "expo-status-bar";
import { Component, ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

import { fetchInitialDeals } from "../ajax";

class Home extends Component {
  async componentDidMount(): Promise<void> {
    const deals = await fetchInitialDeals();
    console.log(deals);
  }

  render(): ReactNode {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={[styles.header]}>BakeSale</Text>
        <Text></Text>
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
