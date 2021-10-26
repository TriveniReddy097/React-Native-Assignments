import React from "react";
import { View, Modal, ActivityIndicator } from "react-native";

const LoadingWrapper = ({ children, loading = false }) => {
  return (
    <View style={{ flex: 1 }}>
      {children}
      <Modal visible={loading} transparent={true}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="blue" />
        </View>
      </Modal>
    </View>
  );
};

export default LoadingWrapper;
