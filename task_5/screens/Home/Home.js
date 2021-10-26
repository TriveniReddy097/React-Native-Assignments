import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  StyleSheet,
} from "react-native";
import { BASE_URL } from "../../constants";
import LoadingWrapper from "../../components/common/LoadingWrapper";
import Table from "../../components/home/Table/Table";

const Home = ({ navigation }) => {
  const ref = useRef();
  const [appState, setAppState] = useState({
    loading: false,
    data: [],
  });
  const [page, setPage] = useState(1);
  const [scrollStart, ssetScrollStart] = useState(false);
  const fetchData = async () => {
    try {
      setAppState((appState) => ({ ...appState, loading: true }));
      const response = await axios.get(`${BASE_URL}${page}`);
      const data = await response.data;
      setAppState((appState) => ({
        ...appState,
        data: [...appState.data, ...data.hits],
        loading: false,
      }));
      ssetScrollStart(false);
    } catch (err) {
      setAppState((appState) => ({ ...appState, loading: false }));
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
    ref.current = setInterval(async () => {
      setPage(page + 1);
    }, 10000);
    return () => {
      clearInterval(ref.current);
    };
  }, [page]);

  if (appState.data.length === 0 && !appState.loading) {
    return (
      <View style={styles.centerContainer}>
        <Text>Nothing to show here.</Text>
      </View>
    );
  }
  return (
    <LoadingWrapper loading={appState.loading && !appState.data.length}>
      <FlatList
        contentContainerStyle={{ flex: 1 }}
        data={appState.data}
        keyExtractor={(item) => item.objectID}
        renderItem={({ item }) => (
          <Table
            post={item}
            onPress={() => navigation.navigate("Details", { item })}
          />
        )}
        onMomentumScrollBegin={() => ssetScrollStart(false)}
        onEndReached={() => {
          if (!scrollStart) {
            fetchData();
            clearInterval(ref);
            ssetScrollStart(true);
          }
        }}
        // onEndReachedThreshold={0.1}
        ListFooterComponent={() =>
          appState.loading && !appState.data.length ? (
            <></>
          ) : (
            <ActivityIndicator size="large" color="blue" />
          )
        }
      />
    </LoadingWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
